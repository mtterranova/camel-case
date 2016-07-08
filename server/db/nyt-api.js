var nytTop = require('nyt-top');

var config = require('../config/config');
var dbCallback = require('./db.js');

nytTop.key(config.nyt.apiKey); // set your Top Stories API developer key

module.exports = function(){

  nytTop.section('home', function (err, data) {
    if (err) { console.log(err); } else {
      var results = data.results;
      dbCallback(results);
      // for (var i = 0; i < 10; i++) { // top ten most recent stories
      //   console.log(results[i]);
      // }
    }
  });

}
