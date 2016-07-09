import React from 'react'
import PulseEntry from './PulseEntry/PulseEntry'
import exampleData from '../../exampleData'

class PulseGrid extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

mapArticles(){
	return exampleData["7/8/2016"].map(function(article,index){
		return <PulseEntry key={index} articleData={article}/>
	})
}


render(){
	
	let articles = this.mapArticles();
	
	return (
		<div className="container">
			{ articles }
		</div>
	)
}
}

module.exports = PulseGrid