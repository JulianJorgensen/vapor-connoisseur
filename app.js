require('dotenv').config();
let express = require('express');
let app = module.exports = express();
let logger = require('morgan');
let expressStaticGzip = require("express-static-gzip");
let cors = require("cors");
let util = require('./server/util/util');
let ENV_CONFIG = util.getEnvConfig();

// routes
let contentful = require('./server/routes/contentful');

// Set port
app.set('port', (process.env.PORT || 3000));

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// cors
app.use(cors());

// Serve Gzip
app.use("/", expressStaticGzip(__dirname + '/public'));

// Contentful routes
app.get('/getAllContent', cors(), contentful.getAllContent);

// Catch all other paths and serve the index file
app.all('*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

// Listen to port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
