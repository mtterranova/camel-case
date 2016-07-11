import React from 'react';
import reactDom from 'react-dom';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import AppBar from 'material-ui/AppBar';
import moment from 'moment';

class Nav extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		};


	}


	render(){

		injectTapEventPlugin();
		// let date = {date: moment(new Date()).format()};

		return(
			<MuiThemeProvider>
				 <AppBar
				    title = "News Pulse"
		    		iconElementLeft = {<h></h>}
				    iconElementRight = {
				    	<DatePicker
				    		defaultDate = { new Date() }
					    	inputStyle = { {color: 'white'} }
					    	autoOk = { true }
					    /> 
					}
				  />
			</MuiThemeProvider>  			
  		)
	}
}

module.exports = Nav;