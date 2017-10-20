import Mailer from './Mailer';

export const send = function(req, res) {
  console.log(req.body);
  let { fromName, fromEmail, subject, ...context } = req.body;

  let mailOptions = {
    from: {name: fromName, address: fromEmail},
    to: {name: 'Julian Jorgensen', address: 'me@julianjorgensen.com'},
    subject,
    template: {
      name: `./server/emails/templates/default.pug`,
      engine: 'pug',
      context: {
        name: fromName,
        email: fromEmail,
        ...context
      }
    }
  };

  console.log('mailOptions', mailOptions);

  return new Promise(function(resolve, reject) {
    Mailer(mailOptions).then(() => {
      resolve();
      res.status(200).send('success');      
    }).catch((err) => {
      console.error('Error sending email ', err);
    })
  });
};
