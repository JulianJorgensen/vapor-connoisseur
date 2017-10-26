import path from 'path';
import compression from 'compression';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import {} from 'dotenv/config';

const app = express();
app.use(compression());

// routes
const contentful = require('./server/routes/contentful');
const sendEmail = require('./server/emails/sendEmail');

// Set port
app.set('port', (process.env.PORT || 3000));

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// cors
app.use(cors({
  origin: true,
}));

app.use(express.static(path.join(__dirname, 'public')));

// Contentful route
app.get('/getAllContent', contentful.getAllContent);

// Send email route
app.post('/sendEmail', sendEmail.send);

// Catch all other paths and serve the index file
app.all('*', function(request, response) {
  response.sendFile(path.join(__dirname, 'public/index.html'));
});

// Listen to port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
