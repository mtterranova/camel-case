var express = require('express')
var schedule = require('node-schedule');

var nyt = require('./db/nyt-api');

var app = express();

/* Serve all static files from public folder */
app.use(express.static('./client'));

/* Declare port number & init server */
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('server listening on port 3000');
});

//on some interval, pull NYT data
var date = new Date(2016, 6, 7, 16, 15, 45);
var j = schedule.scheduleJob(date, function(){
  console.log('npm schedule invoked api call');
  // calls a function which triggers NYT module to pull data
  nyt();
});
