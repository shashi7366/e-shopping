//const mongoose = require("mongoose");

const validator = require("validator");
const mongoose = require('../../db').getConnection();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto =require("crypto");    // no need for installation it is present by default

const userSchema = new mongoose.Schema({

    name:
    {
       type:String,
       required:[true,"Please Enter Your Name"],
       maxLength:[30,"Name cannot exceed 30 characters"],
       minLength:[4,"Name should have more then 4 character"]
    },
    email:
    {
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a valid Email"]
    },
    password:
    {
        type:String,
        required:[true,"Please Enter your Password"],
        minLength:[8,"Password should be greater or equal to 8"],
       
    },
    avatar:
    {

            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        },

        role: {
            type: String,
            default: "user",
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
  

     resetPasswordToken:String,
     resetPassordExpire:Date,

}); 

userSchema.pre("save",async function(next)
{   if(!this.isModified("password"))
    {
       next();
    }

    this.password = await bcrypt.hash(this.password,10);
})

// JWT TOKEN

//IT WILL help when we will register then after automatically you will get logged


userSchema.methods.getJWTToken = function()
{
  return jwt.sign({id:this._id},process.env.JWT_SECRET="asffghfhfghfvghfgfh",{ expiresIn: process.env.JWT_EXPIRE="5d",

  });
};

//compare password
userSchema.methods.comparePassword= async function(password)
{

    return await bcrypt.compare(password, this.password);

};

// Generating Password Reset Token 

userSchema.methods.getResetPasswordToken = function ()
{
    const resetToken =crypto.randomBytes(20).toString("hex");  // will generate token of 20 bytes
    // Hashing and adding resetPasswordToken to userSchemas
    this.resetPasswordToken =crypto
                              .createHash("sha256") // sha256 is a algorithm
                              .update(resetToken)
                              .digest("hex");

      this.resetPasswordExpire =Date.now()+ 15*60*1000;  // after generating reset code it will valid till 15 min
      return resetToken;

      //  NOW THROUGH NODEMAILER WE WILL SEND MAIL THE ABOVE TOKEN SLO THAT ONE CAN SET NEW PASSWORD 
};        


module.exports=mongoose.model("User",userSchema);