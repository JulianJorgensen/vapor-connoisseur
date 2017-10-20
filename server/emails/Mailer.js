import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
let auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
}
let nodemailerMailgun = nodemailer.createTransport(mg(auth));

const send = function(mailOptions) {
  let promise = new Promise((resolve, reject) => {
    nodemailerMailgun.sendMail(mailOptions, (err, response) => {
      if(err) {
        console.log('Error: ' + err);
        reject(err);
      }else{
        resolve(response);
      }
    });
  });
  return promise;
}
module.exports = send;
