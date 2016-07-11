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
			<div className="reactionBar">
				<ul className="reactionsButtonList">
					<li><RaisedButton label="Happy" style={style}/></li>
					<li><RaisedButton label="Sad" style={style} /></li>
					<li><RaisedButton label="Angry" style={style} /></li>
					<li><RaisedButton label="Afraid" style={style} /></li>
				</ul>
			</div>
		)
	}
}

module.exports = ReactionBar