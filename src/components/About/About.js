import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import {Link} from 'react-router';


class About extends React.Component {

	render(){
		const style ={
			color:'#FFFFFF'
		}
		let Homelink = <Link style = {style}
												 to={"/"}>
												 <i className="fa fa-long-arrow-left"></i>
												 Home
									 </Link>

		return (
			<div>
			<MuiThemeProvider>
			 <AppBar
    	title={Homelink}
			style = {
				{ 'backgroundColor': '#0097A7' }
			}
    	iconClassNameRight="muidocs-icon-navigation-expand-more"
    	iconElementLeft ={<h1></h1>}
  				/>
  			</MuiThemeProvider>

        <div id = "paragraph">
  			<div className ="container-fluid">
				<h1><center>Our Story</center></h1>
				<p className = "text-center">
				Like many things it started with a simple idea. An idea to reinvent the way we read the news. Today’s generation isn’t about being knowledgeable in a single topic, but rather well informed in a broad range of topics.  We took that very concept and built an application that allows readers to stay informed about the topics important to the world. As a team, we felt that the readers opinion  amongst most news sources was completely undermined. Our application gives users a new and exciting way to interpret the news by viewing the reactions of a story first, rather than the article itself. We hope to you enjoy using NewsPulse as much as we enjoyed creating it for you. 
</p>
			
				
				<div id="team">
   <h1><center>Our team</center></h1>
   <div className="row" className="text-center">
      <div className="col-sm-3"><img className="img-circle" src={ 'https://avatars0.githubusercontent.com/u/13908543?v=3&s=400'} alt='Max' height='200' width='200' />
         <h4>Max Einstein</h4>
      </div>
      <div className="col-sm-3"><img className="img-circle" src={ 'https://avatars0.githubusercontent.com/u/17011761?v=3&s=400'} alt='Matthew' height='200' width='200' />
         <h4>Matthew Terranova</h4>
      </div>
      <div className="col-sm-3"><img className="img-circle" src={ 'https://avatars0.githubusercontent.com/u/8779656?v=3&s=400'} alt='Dailen' height='200' width='200' />
         <h4>Dailen Spencer</h4>
      </div>
      <div className="col-sm-3"><img className="img-circle" src={ 'https://avatars2.githubusercontent.com/u/14831209?v=3&s=460'} alt='Jason' height='200' width='200' />
         <h4>Jason Lee</h4>
      </div>
   </div>
</div>
</div>
</div>

</div>

			)
	}
}

module.exports = About;
