import React from 'react';
import ReactDOM from 'react-dom';
import PulseEntryOrb from './PulseEntryOrb';
import PulseEntryHover from '../PulseEntryHover/PulseEntryHover'

export default class PulseEntry extends React.Component {

  render() {
    
    return (
      <div className="col-md-4 orb-entry" >
          <PulseEntryOrb reactions={this.props.articleData.reactions} articlePopularity={this.props.articlePopularity}/>
          <PulseEntryHover articleData={this.props.articleData} />
      </div>
    );
  }
}
