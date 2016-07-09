import React from 'react';
import reactDom from 'react-dom';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import AppBar from 'material-ui/AppBar';



class Nav extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		};
	}
	render(){
		
		injectTapEventPlugin();

		return(
			<MuiThemeProvider>
			  <AppBar
    			title="Title"
    			iconClassNameRight="muidocs-icon-navigation-expand-more"
  			  />
  			</MuiThemeProvider>
  		)
	}
}

module.exports = Nav;