import React from 'react'

module.exports = React.createClass({
	propTypes: {
		image: React.PropTypes.array.isRequired,
		caption: React.PropTypes.string
	},
	render: function() {
		return <figure>
			<img src={this.props.image[0][0]} />
			<figcaption>{this.props.caption}</figcaption>
		</figure>
	}
})
