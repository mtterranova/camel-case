import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import {Link} from 'react-router';



class About extends React.Component {
	constructor(props){
		super(props);

		this.state={

		}

	}

	render(){
		const style ={
			color:'#FFFFFF'
		}
		let Homelink = <Link style = {style} to ={"/"}><i className="fa fa-long-arrow-left"></i>&nbsp;Home</Link>
		return (
			<div>
			<MuiThemeProvider>
			 <AppBar
    	title={Homelink}
    	iconClassNameRight="muidocs-icon-navigation-expand-more"
    	iconElementLeft ={<h1></h1>}
  				/>
  			</MuiThemeProvider>
  			<div id = "headerContainer">
  				<h1 id="headerTitle">About</h1>
  				<p id="headerParagraph">OUR STORY. OUR TEAM. OUR IDEA.</p>
  			</div>
  			<div id = "paragraph">
				<h1>Our Story</h1>
				<p>stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstrASDLDS:JKSFDJ:K:SFDKLJKLKLIN THE JUNGLE THE MIGHTY JUNGLE THE LION SLEEPS TONIGHT AWEEOOOO IN THE JUNGLE THE MIGHTY JUNGLE THE LION SLEEPS TONIGHT BLAH BLAH BLAH THIS BE TOO COOL SMOKING AND EATING THE DEVILS LETTUCE</p>
			</div>
			<div id = "team">
				<h2>Our team</h2>
				<p>Picture goes here</p>
			</div>

			
			</div>

			)
	}
}

module.exports = About;

