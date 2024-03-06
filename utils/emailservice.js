const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bradyfiction001@gmail.com',
    pass: 'fosz liow aysg jawc',
  },
});


const sendOTPEmail = async (to, otp) => {
    try {
      const mailOptions = {
        from: 'mrinmoymq9@gmail.com',
        to,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`,
      };
      console.log('Sending OTP email to:', to);
      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent: ', result.response);
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  };
  
  module.exports = { sendOTPEmail };
  