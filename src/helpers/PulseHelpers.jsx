

var PulseHelpers = {
	colorPicker: function(reactions){
		var biggestReaction = Object.keys(reactions).reduce(function(a, b){ return reactions[a] > reactions[b] ? a : b });
		var biggestReactionColor = getReactionColor(biggestReaction);
		var biggestReactionCount = reactions[biggestReaction]
		
		delete reactions[biggestReaction];
		
		var secondBiggestReaction = Object.keys(reactions).reduce(function(a, b){ return reactions[a] > reactions[b] ? a : b });
		var secondBiggestReactionColor = getReactionColor(secondBiggestReaction);
		var secondBiggestReactionCount = reactions[secondBiggestReaction];

		 return colorConverter(biggestReactionColor,biggestReactionCount,secondBiggestReactionColor,secondBiggestReactionCount);
	}
}

function colorConverter(biggestReactionColor,biggestReactionCount,secondBiggestReactionColor,secondBiggestReactionCount){

	var ramp = d3.scaleLinear().domain([-secondBiggestReactionCount,0,biggestReactionCount]).range([secondBiggestReactionColor,'#d3d3d3',biggestReactionColor]);
	console.log(ramp((biggestReactionCount + (-secondBiggestReactionCount)) / 2))
	return ramp((biggestReactionCount + (-secondBiggestReactionCount)) / 2)
	
}



function getReactionColor(reaction){
	switch(reaction){
		case 'sad':
			console.log('return sad blue')
			return colors.sadBlue;
		case 'angry':
			console.log('return depressing red')
			return colors.depressingRed;
		case 'happy':
			console.log('return happy green')
			return colors.happyGreen;
		default:
			break
	}
}



 var colors = {
      depressingRed: '#FF6C6B',
      happyGreen: '#4CCC92',
      sadBlue:'#2EB3C9'
    }

module.exports = PulseHelpers;