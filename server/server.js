var express = require('express');
var firebase = require('firebase');
var credentials = require('./db/credentials');

/*
firebase.initializeApp({
  serviceAccount: credentials,
  databaseURL: 'https://camel-case-e34bc.firebaseio.com'
});

var db = firebase.database();
var ref = db.ref("/data");
ref.set({
  oneDay: {},
  nextDay:{}
})
*/

var app = express();

/* Serve all static files from public folder */
app.use(express.static('./client'));

/* Declare port number & init server */
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('server listening on port 3000');
});
