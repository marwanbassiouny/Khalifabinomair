var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3000)



var transport = {
  service: 'gmail',
  auth: {
    user: "kmarwan918@gmail.com",
    pass: "marwanis87",
  },
};

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

var maillist = [
    'marwanbassiouny7@gmail.com',
    'mkhalil@zayan-associates.com',
    'dalia.tantawyy@gmail.com',
  ];

  router.get('/contactus', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const phone=  req.body.phone
    const message = req.body.message

    const mail = {
        from: name,
        to: maillist,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Email: ${phone}</p>
               <p>Message: ${message}</p>`,
      };
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })