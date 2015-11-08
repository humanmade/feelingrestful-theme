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
					<div className="api-display-wrap">
						<div className="api-display">
							The WordPress REST API is the next generation of WordPress, opening the platform up in brand new ways. With the WordPress REST API you can build applications that retrieve information from WordPress, without touching a line of PHP. A Day of REST is a day dedicated to the WordPress REST API. Find out about the possibilities of the WordPress REST API from the people making it, and from the people using it.
							The WordPress REST API is the next generation of WordPress, opening the platform up in brand new ways. With the WordPress REST API you can build applications that retrieve information from WordPress, without touching a line of PHP. A Day of REST is a day dedicated to the WordPress REST API. Find out about the possibilities of the WordPress REST API from the people making it, and from the people using it.
							The WordPress REST API is the next generation of WordPress, opening the platform up in brand new ways. With the WordPress REST API you can build applications that retrieve information from WordPress, without touching a line of PHP. A Day of REST is a day dedicated to the WordPress REST API. Find out about the possibilities of the WordPress REST API from the people making it, and from the people using it.
							The WordPress REST API is the next generation of WordPress, opening the platform up in brand new ways. With the WordPress REST API you can build applications that retrieve information from WordPress, without touching a line of PHP. A Day of REST is a day dedicated to the WordPress REST API. Find out about the possibilities of the WordPress REST API from the people making it, and from the people using it.
							The WordPress REST API is the next generation of WordPress, opening the platform up in brand new ways. With the WordPress REST API you can build applications that retrieve information from WordPress, without touching a line of PHP. A Day of REST is a day dedicated to the WordPress REST API. Find out about the possibilities of the WordPress REST API from the people making it, and from the people using it.
							The WordPress REST API is the next generation of WordPress, opening the platform up in brand new ways. With the WordPress REST API you can build applications that retrieve information from WordPress, without touching a line of PHP. A Day of REST is a day dedicated to the WordPress REST API. Find out about the possibilities of the WordPress REST API from the people making it, and from the people using it.
							The WordPress REST API is the next generation of WordPress, opening the platform up in brand new ways. With the WordPress REST API you can build applications that retrieve information from WordPress, without touching a line of PHP. A Day of REST is a day dedicated to the WordPress REST API. Find out about the possibilities of the WordPress REST API from the people making it, and from the people using it.
							The WordPress REST API is the next generation of WordPress, opening the platform up in brand new ways. With the WordPress REST API you can build applications that retrieve information from WordPress, without touching a line of PHP. A Day of REST is a day dedicated to the WordPress REST API. Find out about the possibilities of the WordPress REST API from the people making it, and from the people using it.
						</div>
					</div>
					{this.props.children || <Intro />}
				</div>
				<APIConsole />
			</div>
		)
	}
})
