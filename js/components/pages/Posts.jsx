import React from 'react'
import { fetchPosts } from '../../actions'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchPosts() )
	},

	render: function() {

		return (
			<ul className="Posts">
				{this.props.posts.map( post => {
					return <li key={post.id}>{post.title.rendered}</li>
				})}
			</ul>
		)
	}
})
