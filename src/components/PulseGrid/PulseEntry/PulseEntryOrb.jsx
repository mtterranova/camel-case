import React from 'react';
import ReactDOM from 'react-dom';
import PulseEntry from './PulseEntry';
import PulseHelpers from '../../../helpers/PulseHelpers'

class PulseEntryOrb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    var color = PulseHelpers.colorPicker(this.props.reactions);
    
    return (
      <div className='pulsatingCircle' onClick={() => this.props.handleOrbClick(this.props.reactions)}>
          <span className='firstCircle'  style={{'backgroundColor': color}}></span>
          <span className='secondCircle' style={{'borderColor':color}} ></span>
          <span className='thirdCircle' style={{'borderColor':color}} ></span>
      </div>
    );
}


}

module.exports = PulseEntryOrb





//Dailen...
  //Dailen...
    //I own you...
      //I've outgrown you Dailen... 
        //Your mac...




