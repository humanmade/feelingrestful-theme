import React from 'react'
import { fetchPosts } from '../../actions'
import { Link } from 'react-router'
import Post from './Post'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchPosts() )
	},

	render: function() {
		return (
			<ul className="Posts">
				{this.props.posts.map( post => {
					return <li key={post.id}>
						<Post posts={this.props.posts} routeParams={{slug:post.slug}} />
					</li>
				})}
			</ul>
		)
	}
})
