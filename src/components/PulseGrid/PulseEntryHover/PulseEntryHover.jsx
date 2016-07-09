import React from 'react';
import ReactDOM from 'react-dom';

class PulseEntryHover extends React.Component {
  
  render() {
    return (
      <div> 
        <h5>{this.props.articleData.title}</h5>
        <div>
        <button className='btn'>Sad {this.props.articleData.reactions.sad}</button>
        <button className='btn'>Happy {this.props.articleData.reactions.happy}</button>
        <button className='btn'>Frustrated {this.props.articleData.reactions.angry}</button>
        <button className='btn'>Afraid {this.props.articleData.reactions.scared}</button>
        </div>
      </div>
    );
  }
}

module.exports = PulseEntryHover