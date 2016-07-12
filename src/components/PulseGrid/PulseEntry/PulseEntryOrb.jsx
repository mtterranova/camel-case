import React from 'react';
import ReactDOM from 'react-dom';
import PulseEntry from './PulseEntry';
import PulseHelpers from '../../../helpers/PulseHelpers'

export default class PulseEntryOrb extends React.Component {

  render() {

      var color = PulseHelpers.colorPicker(this.props.reactions);

      return (
        <div className='pulsatingCircle'>
            <span className='firstCircle'  style={{'backgroundColor': color}}></span>
            <span className='secondCircle' style={{'borderColor':color}} ></span>
            <span className='thirdCircle' style={{'borderColor':color}} ></span>
        </div>
      );
  }

}
