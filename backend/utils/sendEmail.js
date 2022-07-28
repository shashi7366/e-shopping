
const nodeMailer = require("nodemailer");

const sendEmail = async (options)=>
{
    const transporter = nodeMailer.createTransport(
        {
             service:process.env.SMPT_SERVICE="gmail",
             auth:{
                user:process.env.SMPT_MAIL="dharmendrabhaipatel140@gmail.com",
                pass:process.env.SMPT_PASSWORD="abfzsmpnyrbdquss" //="abfzsmpnyrbdquss",
             },

        });
 
    const mailOptions ={
        from :process.env.SMPT_MAIL="dharmendrabhaipatel140@gmail.com",
        to:options.email,
        subject:options.subjects,
        text:options.message,
    };
await transporter.sendMail(mailOptions);

};

module.exports= sendEmail;
