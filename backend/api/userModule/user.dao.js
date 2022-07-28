const User = require("./user.entity");
const ErrorHander=require('../../utils/errorhander');
const sendToken = require("../../utils/jwtToken");
const sendEmail=require("../../utils/sendEmail")
const crypto = require("crypto");

const registerUser = async (req,res,next)=>
{

    console.log(req.body);
    const{ name, email, password} =req.body;
    
    const user=await User.create({
        name,
        email,
        password,
        avatar: {
            public_id :"This is a sample id",
            url:    "ProfilepicUrl",
        },
    });
 

    sendToken(user,201,res);

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
     const user = await User.findOne({email:req.body.email});
   
     if(!user)
     {
        return next (new ErrorHander("User not found", 404));
     }

     //get resetpassword token

     const resetToken = user.getResetPasswordToken();

     await user.save({validateBeforeSave: false});

     const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/users/password/reset/${resetToken}`;  // 'http://localhost/api/password/reset/${resetToken}'

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
    

module.exports={registerUser,loginUser,logout,forgotPassword,resetPassword};