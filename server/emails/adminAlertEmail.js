let sendMail = require('./sendMail');

// send alert to admin
let send = function(body) {
  let promise = new Promise(function(resolve, reject){
    let mailOptions = {
      from: {name: 'JJ Admin', address: 'me@julianjorgensen.com'},
      to: {name: 'Julian Jorgensen', address: 'me@julianjorgensen.com'},
      subject: 'Admin alert',
      template: {
        name: `./admin/emails/templates/adminAlertEmail.pug`,
        engine: 'pug',
        context: {
          title: 'An error occurred',
          body
        }
      }
    };

    sendMail(mailOptions).then(() => {
      resolve();
    }).catch((err) => {
      console.log('Error: Something went wrong when sending the admin alert email...', err);
    });
  }).catch((err) => {
    console('Error: ', err);
  });
  return promise;
};

module.exports.send = send;
