import React from 'react';
import reactDom from 'react-dom';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import AppBar from 'material-ui/AppBar';
import moment from 'moment';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router'

import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
		

		
	}

	componentDidMount() {
		this.props.fetchSections();
	}

	handleFilter(sectionFilter) {
		this.props.fetchArticles(sectionFilter);
	}

	renderMenuItems() {
		return this.props.sections && this.props.sections.map(function(section,index) {
			 return <MenuItem key={index} onTouchTap={this.handleClose.bind(this)} onClick={() => this.handleFilter(section)}> {section} </MenuItem>
		}, this)
	}

	handleDate(date) {
		return moment(date).format('MMMM Do, YYYY')
	}

	handleDateChange(a, b) {
		console.log('handleDateChange')
		console.log(a)
		console.log(b)
	}

	handleToggle() {
		this.setState({open: !this.state.open})
	}

	handleClose() {
		this.setState({open: false});
	}

	render() {


		let MenuItems = this.renderMenuItems();
		let style = {
			color:'#FFFFFF'
		}
		let AboutLink = <Link style={style} to = {"/about"}>News Pulse</Link>
		return(
			<div>
				<MuiThemeProvider>
					<AppBar
					    title = {AboutLink}
					    onLeftIconButtonTouchTap = { this.handleToggle.bind(this) }
					    iconElementRight = {
					    	<DatePicker
									onChange = { this.handleDateChange }
									maxDate = { new Date() }
					    		formatDate = { this.handleDate.bind(this) }
					    		defaultDate = { new Date() }
									inputStyle = {
									{
										'color': 'white',
										'textAlign': 'center',
										'width': '100%' }
									}
						    	autoOk = { true }
						    />
						}
					/>
				</MuiThemeProvider>
				<MuiThemeProvider>
						<Drawer
							open = { this.state.open }
							docked = { false }>
								<div>
									{ MenuItems }
	       				</div>
       				</Drawer>

   				</MuiThemeProvider>
   			</div>
  		)
	}
}

function mapStateToProps(state) {
	return {
		sections: state.fetchSectionsReducer.data,
		articles: state.fetchArticlesReducer.data
	};
}

export default connect(mapStateToProps, actions)(Nav);
