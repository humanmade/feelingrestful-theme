import React from 'react'

module.exports = React.createClass( {
	render: function () {
		return (
			<div className="Loading">
				<div className="spinner"></div>
				<div className="message">{this.props.message || "Loading..." }</div>
			</div>
		)
	}
} )
