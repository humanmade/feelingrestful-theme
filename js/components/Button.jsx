import React from 'react'

module.exports = React.createClass({

	propTypes: {
		classes: React.PropTypes.string,
		url: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired,
		icon: React.PropTypes.string,
		onClick: React.PropTypes.func
	},

	render: function() {
		return (
			<a onClick={this.props.onClick} className={ "Button " + this.props.classes } href={this.props.url} target={this.props.target || '_parent' } >
				{this.props.icon &&
					<i className={ 'fa ' + this.props.icon }></i>
				}
				{this.props.text}
			</a>
		)
	}
})
