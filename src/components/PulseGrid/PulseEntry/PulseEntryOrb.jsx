import React from 'react';
import ReactDOM from 'react-dom';


class PulseEntryOrb extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    }
  }
  
  render() {
    var colours = [1,2,3,4,5]
    var items = colours.map(function(color){
      return (
        <div className='pulsatingCircle'>
          <span className='firstCircle'></span>
          <span className='secondCircle'></span>
          <span className='thirdCircle'></span>
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



