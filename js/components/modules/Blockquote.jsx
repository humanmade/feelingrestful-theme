import React from 'react'

module.exports = React.createClass({
	propTypes: {
		text: React.PropTypes.string.isRequired,
		source: React.PropTypes.string.isRequired
	},
	render: function() {
		return <blockquote className="Blockquote" cite={this.props.source}>
			<p>{this.props.text}</p>
		</blockquote>
	}
})
