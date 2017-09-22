require('dotenv').config();
let express = require('express');
let app = module.exports = express();
let logger = require('morgan');
let expressStaticGzip = require("express-static-gzip");

// routes
let contentful = require('./server/routes/contentful');
let email = require('./server/routes/email');

let util = require('./server/util/util');
let ENV_CONFIG = util.getEnvConfig();
console.log('Site url: ', ENV_CONFIG.SITE_URL);

// Set port
app.set('port', (process.env.PORT || 3000));

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// Email routes
app.use('/email', email);

// Serve Gzip
app.use("/", expressStaticGzip(__dirname + '/public'));

// Catch all other paths and serve the index file
app.all('*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

// Listen to port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
