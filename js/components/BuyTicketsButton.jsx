import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({
	render: function() {
		return <Link className="BuyTicketsButton" to="/tickets">{this.props.children}</Link>
	}
})
