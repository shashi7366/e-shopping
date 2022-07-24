//const mongoose = require("mongoose");
const validator = require("validator");
const mongoose = require('../../db').getConnection();


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
     role:
     {
        type:String,
        dafult:"user",
     },

     resetPasswordToken:String,
     resetPassordExpire:Date,

})


module.exports=mongoose.model("User",userSchema);