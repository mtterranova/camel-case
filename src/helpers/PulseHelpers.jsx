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
	}

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
			console.log('return scary black');
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
