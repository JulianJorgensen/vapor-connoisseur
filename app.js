require('dotenv').config();
let express = require('express');
let app = module.exports = express();
let logger = require('morgan');
let expressStaticGzip = require("express-static-gzip");

// cors
let cors = require("cors");
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://vapor-connoisseur.herokuapp.com/');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// routes
let contentful = require('./server/routes/contentful');
let email = require('./server/routes/email');

let util = require('./server/util/util');
let ENV_CONFIG = util.getEnvConfig();

// Set port
app.set('port', (process.env.PORT || 3000));

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// Content routes
app.use('/contentful', contentful);

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
