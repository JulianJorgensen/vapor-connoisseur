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

    uploadDestinations.forEach((destination, i) => file.mv(`${destination}/${filename}`, (err) => {
      if (err) return res.status(500).send(err);
      if (i === 1) {
        res.send(filename);
      }
      return true;
    }));
    return true;
  });

export default router;
