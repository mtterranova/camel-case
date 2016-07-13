import React from 'react';
import ReactDOM from 'react-dom';
import PulseEntryOrb from './PulseEntryOrb';
import PulseEntryHover from '../PulseEntryHover/PulseEntryHover';
import PulseHelpers from '../../../helpers/PulseHelpers';

export default class PulseEntry extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  

  render() {
    return (
      <div className="col-md-4 orb-entry" >
          <PulseEntryOrb reactions={this.props.articleData.reactions} articlePopularity={this.props.articlePopularity}/>
          <PulseEntryHover articleData={this.props.articleData} />
      </div>
    );
  }
}
