import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class ReactionBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}

	}

	static childContextTypes = {
    	muiTheme: React.PropTypes.object
  	}

  	getChildContext() {
    	return {
      		muiTheme: getMuiTheme()
    	}
  	}


	render(){
		var reactions = this.props.articleData.reactions
		var sortedReactions = Object.keys(reactions).sort(function(a,b){return reactions[b] - reactions[a]})
		const style = {
  			margin: 12,
  			backgroundColor: 'transparent'
		};
		return (
			<div id="reactionBar">
				
			</div>
		)
	}
}

module.exports = ReactionBar