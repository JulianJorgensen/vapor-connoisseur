require('dotenv').config();
let express = require('express');
let app = module.exports = express();
let logger = require('morgan');
let expressStaticGzip = require("express-static-gzip");
let cors = require("cors");
let util = require('./server/util/util');
let ENV_CONFIG = util.getEnvConfig();
let bodyParser = require('body-parser');

// routes
let contentful = require('./server/routes/contentful');
let sendEmail = require('./server/emails/sendEmail');

// Set port
app.set('port', (process.env.PORT || 3000));

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// cors
app.use(cors({
  origin: true
}));

// Serve Gzip
app.use("/", expressStaticGzip(__dirname + '/public'));

// Contentful route
app.get('/getAllContent', contentful.getAllContent);

// Send email route
app.post('/sendEmail', sendEmail.send);

// Catch all other paths and serve the index file
app.all('*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

// Listen to port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
