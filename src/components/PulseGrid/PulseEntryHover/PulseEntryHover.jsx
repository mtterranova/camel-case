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
    
    this.setState({
      backgroundColor: this.state.reactionColor,
      textColor: 'white'
    })
    
  }

  handleMouseLeave(){
    this.setState({
      backgroundColor: 'transparent',
      textColor: 'transparent'
    })
  }

  render() {
    
    return (
      <div  className="pulseEntryHover" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} style={{'backgroundColor': this.state.backgroundColor}}> 
        <h1 className="articleTitle" style={{color:this.state.textColor}}>{this.props.articleData.title}</h1>
        <p className="articleAbstract" style={{color:this.state.textColor}}>{this.props.articleData.abstract}</p>
        <ReactionBar className="reactionBar" articleData={this.props.articleData}/>
      </div>
    );
  }
}

module.exports = PulseEntryHover