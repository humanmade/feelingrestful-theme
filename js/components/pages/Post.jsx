import React from 'react'
import { findWhere } from 'underscore'
import { fetchPostBySlug } from '../../actions'
import Post from '../Post'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchPostBySlug( this.props.routeParams.slug ) )
	},

	render: function() {
		var post = findWhere( this.props.posts.posts, { slug: this.props.routeParams.slug } )

		if ( ! post ) {
			return (
				<div className="loading-wrap">
					<div className="loading"><span className="fa fa-heart"></span> LOADING</div>
				</div>
			)
		}

		return (
			<ul className="Posts">
				<li>
					<Post {...post} />
				</li>
			</ul>
		)
	}
})
