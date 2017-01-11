import React from 'react'

module.exports = React.createClass( {
	propTypes: {
		heading: React.PropTypes.string.isRequired,
		subheading: React.PropTypes.string.isRequired
	},
	render: function () {
		return (
			<div className="Header">
				<div className="inner">
					<h2 className="headline">{this.props.heading}</h2>
					{ this.props.subheading ?
						<p>{this.props.subheading}</p>
						: '' }
				</div>
			</div>
		)
	}
} )
