const nodemailer = require('nodemailer');
  
const transporter = nodemailer.createTransport({
  service: 'gmail',
  type: 'OAuth2',
    user: secure_configuration.EMAIL_USERNAME,
    pass: secure_configuration.PASSWORD,
    clientId: secure_configuration.CLIENT_ID,
    clientSecret: secure_configuration.CLIENT_SECRET,
    refreshToken: secure_configuration.REFRESH_TOKEN
});

const mailConfigurations = {
    from: 'marriageClient@gmail.com',
    to: 'parimalakrishnanaini@gmail.com',
    subject: 'Sending Email using Node.js', 
    text:'Attachments can also be sent using nodemailer',
    attachments: [
    {  
      // utf-8 string as an attachment
      filename: 'text.txt',
      content: 'Hello, GeeksforGeeks Learner!'
    },
    {   
      // filename and content type is derived from path
      path: './Programing/document.docx'
    },
    {   
      path: './Vedios/Sample.mp4'
    },
    {   
      // use URL as an attachment
      filename: 'license.txt',
      path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
    } 
  ]
  }


transporter.sendMail(mailConfigurations, function(error, info){
    if (error) throw Error(error);
       console.log('Email Sent Successfully');
    console.log(info);
});