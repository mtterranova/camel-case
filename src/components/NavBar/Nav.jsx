import React from 'react';
import reactDom from 'react-dom';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import AppBar from 'material-ui/AppBar';
import moment from 'moment';

export default class Nav extends React.Component {

	handleDate(date) {
		return moment(date).format('MMMM Do, YYYY')
	}

	handleDateChange(a, b) {
		console.log('handleDateChange')
		console.log(a)
		console.log(b)
	}

	render(){

		injectTapEventPlugin();

		return(
			<MuiThemeProvider>
				 <AppBar
				    title = "News Pulse"
				    iconElementRight = {
				    	<DatePicker
								onChange={ this.handleDateChange }
								maxDate= { new Date() }
				    		formatDate = { this.handleDate.bind(this) }
				    		defaultDate={ new Date() }
								inputStyle = {{ 'color': 'white', 'text-align': 'center', 'width': '100%' }}
					    	autoOk={ true }
					    />
					}
				  />
			</MuiThemeProvider>
  		)
	}
}
