import React from 'react';
import ReactDOM from 'react-dom';
import PulseEntryOrb from './PulseEntryOrb';
import PulseEntryHover from '../PulseEntryHover/PulseEntryHover';

class PulseEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onOrbClick: false
    }

    this.handleOrbClick = this.handleOrbClick.bind(this);


  }

   handleOrbClick(reactions){
    this.setState({
      onOrbClick: !this.state.onOrbClick
    })
   }



  render() {

    let show = this.state.onOrbClick ?  'show'  : 'hide';

    return (
      <div
           className="col-md-4 orb-entry">
          <PulseEntryOrb reactions={this.props.articleData.reactions} handleOrbClick={this.handleOrbClick}/>
          <div className={show} >
            <PulseEntryHover articleData={this.props.articleData}/>
          </div>
      </div>
    );
  }
}

module.exports = PulseEntry
