import express from 'express';
import fileUpload from 'express-fileupload';
import moment from 'moment';

const router = express.Router();
const uploadDestinations = ['./public/uploads', './client/assets/uploads'];

// default options
router.use(fileUpload());

router.route('/')
  .post((req, res) => {
    if (!req.files) return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const { file } = req.files;
    const filename = `${moment().format('DD-MM-YYYY')}-${file.name}`;

    const promise = new Promise((resolve, reject) => {
      uploadDestinations.forEach((destination, i) => file.mv(`${destination}/${filename}`, (err) => {
        if (err) reject();
        if (i === (uploadDestinations.length - 1)) {
          console.log('resolving');
          resolve(filename);
        }
      }));
    });

    promise.then((filename) => {
      res.status(200).send(filename).end();
    });
  });

export default router;
