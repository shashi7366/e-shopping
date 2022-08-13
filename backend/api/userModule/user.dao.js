const User = require("./user.entity");
const ErrorHander=require('../../utils/errorhander');
const sendToken = require("../../utils/jwtToken");
const sendEmail=require("../../utils/sendEmail")
const crypto = require("crypto");

const registerUser = async (req,res,next)=>
{

    console.log(req.body);
    const{ name, email, password} =req.body;
    
    const user=User.create({
        name,
        email,
        password,
        avatar: {
            public_id :"This is a sample id",
            url:    "ProfilepicUrl",
        },
    }).then((result)=>{
      console.log(result);
      sendToken(result,201,res);
    }).catch((err)=>{
      next(new ErrorHander("email already taken",403));
    })
 

    // sendToken(user,201,res);

};


//LOGIN USER

const loginUser=async(req,res,next)=>
{
    const {email,password}= await req.body;

    //ckeck if user has given email and password both or not

    if(!email || !password)
    {
       return next(new ErrorHander("Please Enter Email & Password",400));
    }

    const user= await User.findOne({email}).select("+password") ; //here password is taken differently because in above we have taken it as false
    if(!user)
    {
        return next(new ErrorHander("Invalid Email or Password",401));
    } 
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched)
    {
        return next(new ErrorHander("Invalid Email or Password",401));
    } 


 sendToken(user,200,res);

}
// LOGOUT USER

const logout = async (req,res,next)=>
{
    res.cookie("token",null,
    {
        expires:new Date(Date.now()),
        httpOnly: true,
    })
    res.status(200).json(
        {
            success:true,
            message: "Logged Out",
        }
    )
}

// FORGOT Password

const forgotPassword = async(req,res,next)=>
{
  console.log(req.body.email);
     const user = await User.findOne({email:req.body.email});
   
     if(!user)
     {
        return next (new ErrorHander("User not found", 404));
     }

     //get resetpassword token

     const resetToken = user.getResetPasswordToken();

     await user.save({validateBeforeSave: false});

    //  const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/users/password/reset/${resetToken}`;  // 'http://localhost/api/password/reset/${resetToken}'
     const resetPasswordUrl = `${req.protocol}://localhost:3000/password/reset/${resetToken}`;
      const message = ` Your Password reset token is :- \n\n ${resetPasswordUrl} \n\n if you have not requested for this email please ignore it.`;

      try
      {
         await sendEmail({
              email:user.email,
              subject :`ESHOPPING Password Recovery`,
              message,
         });
         res.status(200).json(
            {
                success:true,
                 message:`Email sent to ${user.email} successfully`,
            })
      }
      catch(error)
      {
         user.resetPasswordToken=undefined;
         user.resetPasswordToken=undefined;

         await user.save({validateBeforeSave : false});

         return next (new ErrorHander(error.message,500));
      }
    }

  //RESET Password

    const resetPassword = async (req, res, next) => {
        // creating token hash
        const resetPasswordToken = crypto
          .createHash("sha256")
          .update(req.params.token)   // get the reset token 
          .digest("hex");
          
      // with the help of token now will find the user
        const user = await User.findOne({
          resetPasswordToken,
          resetPasswordExpire: { $gt: Date.now() },
        });
    

    if (!user) {
        return next(
          new ErrorHander(
            "Reset Password Token is invalid or has been expired",
            400
          )
        );
      }
    
      if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHander("Password does not Match", 400));
      }
    
      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
    
      await user.save();
    
      sendToken(user, 200, res);
    
    }

    //get user details
    const getUserDetails = async (req, res, next) => {
      const user = await User.findById(req.user.id);
    
      res.status(200).json({
        success: true,
        user,
      });
    };


//update password

    const updatePassword = async (req, res, next) => {
      const user = await User.findById(req.user.id).select("+password");
    
      const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    
      if (!isPasswordMatched) {
        return next(new ErrorHander("Old password is incorrect", 400));
      }
    
      if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHander("password does not match", 400));
      }
    
      user.password = req.body.newPassword;
    
      await user.save();
    
      sendToken(user, 200, res);
    };
    

    // update User Profile
const updateProfile =async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  // if (req.body.avatar !== "") {
  //   const user = await User.findById(req.user.id);

  //   const imageId = user.avatar.public_id;

  //   await cloudinary.v2.uploader.destroy(imageId);

  //   const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
  //     folder: "avatars",
  //     width: 150,
  //     crop: "scale",
  //   });

  //   newUserData.avatar = {
  //     public_id: myCloud.public_id,
  //     url: myCloud.secure_url,
  //   };
  // }

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
};

module.exports={registerUser,loginUser,logout,forgotPassword,resetPassword,getUserDetails,updatePassword,updateProfile};