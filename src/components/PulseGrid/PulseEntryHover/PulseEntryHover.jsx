import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import * as actions from '../../../actions/actions'

class PulseEntryHover extends React.Component {

  render() {
    return (
      <div>
        <h5>{this.props.articleData.title}</h5>
        <div>
          <button
            className='btn'
            onClick={ () => this.props.incrementReactions(this.props.articleData.id, 'sad', this.props.articleData.reactions.sad) } >
            Sad {this.props.articleData.reactions.sad}
          </button>
          <button className='btn'
            onClick={ () => this.props.incrementReactions(this.props.articleData.id, 'happy', this.props.articleData.reactions.happy) } >
            Happy {this.props.articleData.reactions.happy}
          </button>
          <button className='btn'
            onClick={ () => this.props.incrementReactions(this.props.articleData.id, 'angry', this.props.articleData.reactions.angry) } >
            Frustrated {this.props.articleData.reactions.angry}
          </button>
          <button className='btn'
            onClick={ () => this.props.incrementReactions(this.props.articleData.id, 'scared', this.props.articleData.reactions.scared) } >
            Afraid {this.props.articleData.reactions.scared}
          </button>
        </div>
      </div>
    );
  }

}

export default connect(null, actions)(PulseEntryHover);
