import React form 'react';
import ReactDOM from 'react-dom'

class App extends React.component {
	constructor(props);
	super(props);

	this.state = {

	}


	render() {
		return (
			<div>{ this.props.children }</div>
		)
	}
}