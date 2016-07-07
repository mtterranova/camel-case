import React from 'react';
import ReactDOM from 'react-dom';
import PulseEntryOrb from './PulseEntryOrb';
import PulseEntryRing from './PulseEntryRing';
import PulseEntryHover from './PulseEntryHover';

class PulseEntry extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    }
  }
  
  render() {
    return (
      <PulseEntryOrb/>
      <PulseEntryRing/>
      <PulseEntryHover/>
    );
  }
}

module.exports = PulseEntry