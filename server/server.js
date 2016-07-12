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

var sections = ['home','world','national','politics','nyregion','business','opinion','technology','science','health','sports','arts','fashion','dining','travel','magazine','realestate']

var date = new Date(2016, 6, 12, 14, 01, 10);

schedule.scheduleJob(date, function(){
  sections.forEach(function(section){
    nyt(section);
  })
});
