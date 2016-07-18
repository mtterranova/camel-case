var express = require('express')
var schedule = require('node-schedule');

var nyt = require('./db/nyt-api');

var app = express();

/* Serve all static files from public folder */
app.use(express.static('./client'));

/* Include routes */
require('./routes/routes')(app);

/* Declare port number & init server */
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('server listening on port 3000');
});

/* All NYT sections to check for top day's stories */
var sections = require('./config/sections');

/* run cron job every day at 6:01am */
var date = {hour: 06, minute: 01};
schedule.scheduleJob(date, function(){
  sections.forEach(function(section){
    nyt(section);
  })
});
