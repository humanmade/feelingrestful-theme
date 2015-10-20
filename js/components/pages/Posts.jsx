import React from 'react'
import { fetchPosts } from '../../actions'
import { Link } from 'react-router'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchPosts() )
	},

	render: function() {
		return (
			<ul className="Posts">
				{this.props.posts.map( post => {
					return <li key={post.id}><Link to={'/news/' + post.slug}>{post.title.rendered}</Link></li>
				})}
			</ul>
		)
	}
})
