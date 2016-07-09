import React from 'react';
import ReactDOM from 'react-dom';
import PulseHelpers from '../../../helpers/PulseHelpers';
import ReactionBar from './ReactionBar';
import $ from 'jquery';

class PulseEntryHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'transparent',
      reactionColor: PulseHelpers.colorPicker(this.props.articleData.reactions),
      textColor: 'transparent'
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseOver(){
    console.log('handle mouse over');
    this.setState({
      backgroundColor: this.state.reactionColor,
      textColor: 'white'
    })
    $("#reactionsButtonList").fadeIn();
  }

  handleMouseLeave(){
    console.log('handle mouse leave');
    this.setState({
      backgroundColor: 'transparent',
      textColor: 'transparent'
    })
  }

  render() {
    
    return (
      <div  id="pulseEntryHover" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} style={{'backgroundColor': this.state.backgroundColor}}> 
        <h id="articleTitle" style={{color:this.state.textColor}}>{this.props.articleData.title}</h>
        <p id="articleAbstract" style={{color:this.state.textColor}}>{this.props.articleData.abstract}</p>
        <ReactionBar id="reactionBar" articleData={this.props.articleData}/>
      </div>
    );
  }
}

module.exports = PulseEntryHover