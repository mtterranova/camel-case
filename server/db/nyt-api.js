var nytTop = require('nyt-top');
var moment = require('moment');

var config = require('../config/config');
var dbCallback = require('./db.js');

nytTop.key(config.nyt.apiKey);

module.exports = function(section){

  nytTop.section(section, function (err, data) {
    if (err) { console.log(err); } else {
      var results = data.results.filter(function(article){
        var articleDate = article.published_date.split('T')[0];
        var todayDate = moment().format('YYYY-MM-DD');
        return articleDate == todayDate;
      });

      dbCallback(results);

    }
  });

}
