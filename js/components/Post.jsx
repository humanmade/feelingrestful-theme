import React from 'react'
import {Link} from 'react-router'

module.exports = React.createClass( {

	propTypes: {
		title: React.PropTypes.object.isRequired,
		content: React.PropTypes.object.isRequired,
		date: React.PropTypes.string.isRequired,
		slug: React.PropTypes.string.isRequired
	},

	render: function () {
		return (
			<div className="Post">
				<h1><Link to={'/news/' + this.props.slug }>{this.props.title.rendered}</Link></h1>
				<span className="date">{this.props.date}</span>
				<div dangerouslySetInnerHTML={{__html: this.props.content.rendered}}/>
			</div>
		)
	}
} )
