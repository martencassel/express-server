// main server file
var express  = require('express'),
    app      = express();

// let's suppose we already set up our middleware 
// and settings here

// load up our routes
require('./routes')(app);

var server = app.listen(3000, function() {
  console.log('App started');
});