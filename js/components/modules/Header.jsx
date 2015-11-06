import React from 'react'

module.exports = React.createClass({
	propTypes: {
		heading: React.PropTypes.string.isRequired,
		subheading: React.PropTypes.string.isRequired
	},
	render: function() {
		return <div className="Header">
			<h2>{this.props.heading}</h2>
			<h3>{this.props.subheader}</h3>
		</div>
	}
})
