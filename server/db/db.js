var firebase = require('firebase');
var moment = require('moment');

var config = require('../config/config');

firebase.initializeApp({
  serviceAccount: config.firebase,
  databaseURL: 'https://camel-case-e34bc.firebaseio.com'
});


/* TODO: use a universal timezone! */
var dateNow = moment().format('MM-DD-YY')

var db = firebase.database();
var ref = db.ref(dateNow);

module.exports = function(data) {

  var mappedData = data.map(function(item){
    var obj = {
      title: item.title,
      abstract: item.abstract,
      url: item.url,
      published_date: item.published_date,
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
