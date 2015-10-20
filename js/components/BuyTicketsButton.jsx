import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({
	render: function() {
		return <button className="BuyTicketsButton"><Link to="/tickets">{this.props.children}</Link></button>
	}
})
