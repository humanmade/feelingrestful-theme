import React from 'react'
import { findWhere } from 'underscore'
import { fetchPostBySlug } from '../../actions'
import Post from '../Post'

module.exports = React.createClass({

	componentDidMount: function() {
		if ( ! this.props.posts.preview ) {
			this.props.dispatch( fetchPostBySlug( this.props.routeParams.slug ) )
		}
	},

	render: function() {
		var post = this.props.posts.preview || findWhere( this.props.posts.posts, { slug: this.props.routeParams.slug } )

		if ( ! post ) {
			return (
				<div className="loading-wrap">
					<div className="loading"><span className="fa fa-heart"></span> Loading</div>
				</div>
			)
		}

		return (
			<div className="Page SinglePost">
				<div className="Page--header">
					<span className="site-logo"></span>
				</div>
				<div className="Page--content">
					<Post {...post} />
				</div>
			</div>

		)
	}
})
