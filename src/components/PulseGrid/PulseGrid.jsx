import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions/actions'

import PulseEntry from './PulseEntry/PulseEntry'
import exampleData from '../../exampleData'

class PulseGrid extends React.Component {

	componentDidMount() {
		this.props.fetchArticles();
	}

	mapArticles(){
		return this.props.articles && this.props.articles.map(function(article,index){
			return <PulseEntry key={index} articleData={article}/>
		})
	}

	render(){
		return (
			<div className="container">
			{ this.mapArticles() }
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		articles: state.fetchArticlesReducer.data
	};
}

export default connect(mapStateToProps, actions)(PulseGrid);
