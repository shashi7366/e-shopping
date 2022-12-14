// Create Token and saving in cookie

//process.env.COOKIE_EXPIRE ="5d"


const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
  
    // options for cookie
        const options = {
     // expires: new Date(
        maxAge:5*24*60*60*1000,

       // Date.now() + process.env.COOKIE_EXPIRE= //* 24 * 60 * 60 * 1000 

     // ),
      httpOnly: true,
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
    
  };
  
  module.exports = sendToken;
  