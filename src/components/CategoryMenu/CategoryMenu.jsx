import React from 'react';


class CategoryMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fadeInClass: ''
		}
	}

	fadeInMenu() {
		var that = this
		that.setState({ fadeInClass: 'addFadeIn' })
	}


	render() {
		
		return (

			<div
				id = "CategoryMenu"
				className = { this.state.fadeInClass }
				>
			</div>

		)
	}
}

export default CategoryMenu;