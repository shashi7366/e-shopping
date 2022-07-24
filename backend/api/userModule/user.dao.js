const User = require("./user.entity");


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
 
    res.status(201).json({
        success:true
    });

};

module.exports={registerUser};