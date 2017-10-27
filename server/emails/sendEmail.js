import Mailer from './Mailer';

export default (req, res) => {
  const {
    template, fromName, fromEmail, subject, ...context
  } = req.body;

  const mailOptions = {
    from: {
      name: fromName, address: fromEmail,
    },
    to: {
      name: 'Julian Jorgensen', address: 'me@julianjorgensen.com',
    },
    subject,
    template: {
      name: `./server/emails/templates/${template}.pug`,
      engine: 'pug',
      context: {
        name: fromName,
        email: fromEmail,
        ...context,
      },
    },
  };

  console.log('mailOptions', mailOptions);

  return new Promise((resolve, reject) => {
    console.log('mailing');
    Mailer(mailOptions).then(() => {
      console.log('mailed!');
      resolve();
      res.status(200).send('success');
    }).catch((err) => {
      console.error('Error sending email ', err);
    });
  });
};
