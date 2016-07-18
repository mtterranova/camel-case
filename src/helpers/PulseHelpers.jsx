import _ from 'lodash'

var PulseHelpers = {
	colorPicker: function(reactions){

		var sortedReactions = Object.keys(reactions).sort(function(a,b){return reactions[b] - reactions[a]})

		var biggestReaction = sortedReactions.shift();
		var biggestReactionColor = getReactionColor(biggestReaction);
		var biggestReactionCount = reactions[biggestReaction]

		var secondBiggestReaction = sortedReactions.shift();
		var secondBiggestReactionColor = getReactionColor(secondBiggestReaction);
		var secondBiggestReactionCount = reactions[secondBiggestReaction];

		 return colorConverter(biggestReactionColor,biggestReactionCount,secondBiggestReactionColor,secondBiggestReactionCount);
	},

	popularityStatus: function(article, articles){
		var totalArticlesReactionCountAvg = articleReactionsAverage(articles);
		var singleArticleReactionCount = articleReactionCount(article);
		var status = relativeArticleStatus(singleArticleReactionCount, totalArticlesReactionCountAvg);
		return status;
	}

}

function articleReactionsAverage(articles){
	var reactionsSum = articles.map(function(article, index){
		if(articleReactionCount !== 0){
			return articleReactionCount(article);
		}
	}).reduce(function(prev, curr){
			return prev + curr
	})
	return reactionsSum / articles.length
}

function articleReactionCount(article){
	return Object.values(article.reactions).reduce(function(previous, curr){
		return previous + curr;
	})
}

function relativeArticleStatus(singleArticleReactionCount, totalArticleReactionAvg){
	var relativePercentage = (singleArticleReactionCount / totalArticleReactionAvg) * 100;
	if(relativePercentage < 80){
		return 'low'
	} else if(relativePercentage >= 80 && relativePercentage <= 120){
		return 'mid'
	} else if(relativePercentage > 120){
		return 'high'
	}
}


Object.values = function(object) {
  var values = [];
  for(var property in object) {
    values.push(object[property]);
  }
  return values;
}

function colorConverter(biggestReactionColor,biggestReactionCount,secondBiggestReactionColor,secondBiggestReactionCount){

	var ramp = d3.scaleLinear().domain([-secondBiggestReactionCount,0,biggestReactionCount]).range([secondBiggestReactionColor,'#d3d3d3',biggestReactionColor]);
	return ramp((biggestReactionCount + (-secondBiggestReactionCount)) / 2)

}



function getReactionColor(reaction){
	switch(reaction){
		case 'sad':
			return colors.sadBlue;
		case 'angry':
			return colors.depressingRed;
		case 'happy':
			return colors.happyGreen;
		case 'scared':
			return colors.scaryBlack;
		default:
			break
	}
}

 var colors = {
      depressingRed: '#FF6C6B',
      happyGreen: '#4CCC92',
      sadBlue:'#2EB3C9',
      scaryBlack: '#000000'
    }




module.exports = PulseHelpers;
