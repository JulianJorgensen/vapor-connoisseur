let express = require('express');
let router = express.Router();
let app = require('../../app');
let util = require('../util/util');

import { createClient } from 'contentful';
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

router.route('/getAllContent')
  .get(cors(), (req, res) => {
    client.getEntries().then((response) => {
        res.status(200).send(response.items);
      })
      .catch(console.error);
  });

module.exports = router;
