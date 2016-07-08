import React from 'react';
import ReactDOM from 'react-dom';
import PulseEntry from './PulseEntry';
import PulseHelpers from '../../../helpers/PulseHelpers'

class PulseEntryOrb extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.state = {
      
    }
  }

 handleHover(){
  console.log('handle hover');
 }
  
  render() {

    var articles = [
      {
        title: "Amigo jumps from ones roof",
        reactions: {
          angry: 19,
          happy: 20,
          sad:0
        }
      }
    ];

    var items = articles.map(function(article, index){
      var color = PulseHelpers.colorPicker(article.reactions);
      return (
        <div className='pulsatingCircle' onMouseEnter={() => this.handleHover}>
          <span className='firstCircle'  style={{'backgroundColor': color}}></span>
          <span className='secondCircle' style={{'borderColor':color}} ></span>
          <span className='thirdCircle' style={{'borderColor':color}} ></span>
        </div>
      )
    })
      
    return (
      <ul>
        {items}
      </ul>
    );
}


}

module.exports = PulseEntryOrb










