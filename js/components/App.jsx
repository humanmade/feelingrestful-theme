import React from 'react'
import Menu from './Menu'
import BuyTicketsButton from './BuyTicketsButton'
import Intro from './pages/Intro'

module.exports = React.createClass({

	handleClickMenuItem: function( menuItem ) {

	},
	render: function() {
		return (
			<div>
				<div className="left-menu">
					<img className="logo" src="https://hmn-uploads.s3.amazonaws.com/humanmade-production/uploads/sites/27/2015/08/LOGO.png" />
					<BuyTicketsButton>Tickets</BuyTicketsButton>
					<Menu menu={this.props.menu} onClick={this.handleClickMenuItem} />
				</div>
				<div className="page-content">
					{this.props.children || <Intro />}
				</div>
			</div>
		)
	}
})
