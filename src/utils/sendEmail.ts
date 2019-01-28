import nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async (to: string, url: string) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const account = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
    to, // list of receivers
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: `To finish registration – please visit <a href="${url}">${url}</a>` // html body
  };

  // send mail with defined transport object
  const info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

export default sendEmail;
