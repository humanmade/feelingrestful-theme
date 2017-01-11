import React from 'react'
import {fetchPosts} from '../../actions'
import Post from '../Post'

module.exports = React.createClass( {

	componentDidMount: function () {
		this.props.dispatch( fetchPosts() )
	},

	render: function () {
		if ( ! this.props.posts.posts.length ) {
			return (
				<div className="loading-wrap">
					<div className="loading"><span className="fa fa-heart"></span> Loading</div>
				</div>
			)
		}
		return (
			<div className="Page Posts">
				<div className="Page--header">
					<span className="site-logo"></span>
				</div>
				<div className="Page--content">
					<h1 className="Title">News</h1>
					<ul className="Posts Archive">
						{this.props.posts.posts.map( post => {
							return <li key={post.id}>
								<Post {...post} />
							</li>
						} )}
					</ul>
				</div>
			</div>

		)
	}
} )
