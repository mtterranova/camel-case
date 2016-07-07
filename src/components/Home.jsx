import React from 'react';
import ReactDOM from 'react-dom';
import PulseEntry from './PulseGrid/PulseEntry/PulseEntry'

class Home extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    }
  }
  
  render() {
    return (
      <PulseEntry/>
    );
  }
}

module.exports = Home