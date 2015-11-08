import React from 'react'
import Menu from './Menu'
import BuyTicketsButton from './BuyTicketsButton'
import Intro from './pages/Intro'
import APIConsole from './APIConsole'

module.exports = React.createClass({

	handleClickMenuItem: function( menuItem ) {

	},
	render: function() {

		return (
			<div className="App">
				<Menu currentPath={this.props.location.pathname} menu={this.props.menu} onClick={this.handleClickMenuItem} />
				<div className="page-content">
					{this.props.children || <Intro />}
				</div>
				<APIConsole />
			</div>
		)
	}
})
