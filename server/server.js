const express = require('express');
const app = express();
var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api', api);
// pages/static
app.use('/', express.static('ui', { index: 'index.html' }))

// set up global error handling
app.use(function(err, req, res, next) {
  // if error thrown from jwt validation check
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  logger.error(err.stack);
  res.status(500).send('Oops');
});

// export the app for testing
module.exports = app;
