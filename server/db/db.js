var firebase = require('firebase');
var moment = require('moment');

var config = require('../config/config');

firebase.initializeApp({
  serviceAccount: config.firebase,
  databaseURL: 'https://camel-case-e34bc.firebaseio.com'
});


/* TODO: use a universal timezone! */
var dateNow = moment().format('MM-DD-YY')
// var dateNow = '07-11-16'
var db = firebase.database();

module.exports = function(data) {

  //add section after nowNow
  var ref = db.ref(dateNow);

  var mappedData = data.map(function(item){
    var obj = {
      title: item.title,
      abstract: item.abstract,
      url: item.url,
      published_date: item.published_date,
      section: item.section,
      reactions: {
        happy: 0,
        sad: 0,
        angry: 0,
        scared: 0
      }
    };
    return obj;
  })

  mappedData.forEach(function(article){
    ref.push(article)
  });

}
