import React from 'react'
import { findWhere } from 'underscore'
import { fetchPostBySlug } from '../../actions'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchPostBySlug( this.props.routeParams.slug ) )
	},

	render: function() {
		var post = findWhere( this.props.posts.posts, { slug: this.props.routeParams.slug } )

		if ( ! post ) {
			return <p>Loading</p>
		}

		return (
			<div className="Post">
				<h1>{post.title.rendered}</h1>
				<span className="date">{post.date}</span>
				<div dangerouslySetInnerHTML={{__html:post.content.rendered}} />
			</div>
		)
	}
})
