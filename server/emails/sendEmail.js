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
      name: 'Vapor Connoisseur', address: 'info@vaporconnoisseur.com',
    },
    cc: [
      {
        name: 'Julian Jorgensen', address: 'me@julianjorgensen.com',
      },
    ],
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

  return new Promise((resolve, reject) => {
    Mailer(mailOptions).then(() => {
      resolve();
      res.status(200).send('success');
    }).catch((err) => {
      console.error('Error sending email ', err);
    });
  });
};
