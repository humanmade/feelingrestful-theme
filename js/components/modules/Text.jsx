import React from 'react'

module.exports = React.createClass({
	propTypes: {
		body: React.PropTypes.string.isRequired
	},
	render: function() {
		return <div className="Text" dangerouslySetInnerHTML={{__html: this.props.body}} />
	}
})
