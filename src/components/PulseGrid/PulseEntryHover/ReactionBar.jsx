import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { connect } from 'react-redux';
import * as actions from '../../../actions/actions'

class ReactionBar extends React.Component{

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
					<li>
						<RaisedButton style={style}
						  onClick={ () => this.props.incrementReactions(this.props.articleData.id, 'happy', this.props.articleData.reactions.happy) }>
							Happy ({this.props.articleData.reactions.happy})
						</RaisedButton>
					</li>
					<li>
						<RaisedButton style={style}
							onClick={ () => this.props.incrementReactions(this.props.articleData.id, 'sad', this.props.articleData.reactions.sad) }>
							Sad ({this.props.articleData.reactions.sad})
						</RaisedButton>
					</li>
					<li>
						<RaisedButton style={style}
							onClick={ () => this.props.incrementReactions(this.props.articleData.id, 'angry', this.props.articleData.reactions.angry) }>
							Angry ({this.props.articleData.reactions.angry})
						</RaisedButton>
					</li>
					<li>
						<RaisedButton style={style}
							onClick={ () => this.props.incrementReactions(this.props.articleData.id, 'scared', this.props.articleData.reactions.scared) }>
							Scared ({this.props.articleData.reactions.scared})
     				</RaisedButton>
     			</li>
				</ul>
			</div>
		)
	}
}

export default connect(null, actions)(ReactionBar);
