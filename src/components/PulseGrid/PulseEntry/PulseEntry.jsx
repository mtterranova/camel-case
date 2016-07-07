import React from 'react';
import ReactDOM from 'react-dom';
import PulseEntryOrb from './PulseEntryOrb';

class PulseEntry extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    }
  }
  
  render() {
    return (
      <div id="PulseEntryContainer">
        <PulseEntryOrb/>
      </div>
    );
  }
}

module.exports = PulseEntry