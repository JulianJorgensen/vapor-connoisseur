import Mailer from './Mailer';
import { envConfig } from '../util/util';

export default (req, res) => {
  const {
    template, fromName, fromEmail, subject, ...context
  } = req.body;

  const mailOptions = {
    from: {
      name: fromName, address: fromEmail,
    },
    to: envConfig.EMAILS.ADMIN,
    cc: envConfig.EMAILS.CC || '',
    subject,
    template: {
      name: `./server/emails/templates/${template}.pug`,
      engine: 'pug',
      context: {
        name: fromName,
        email: fromEmail,
        ...context,
        ...envConfig,
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
