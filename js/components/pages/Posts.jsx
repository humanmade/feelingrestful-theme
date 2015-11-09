import React from 'react'
import { fetchPosts } from '../../actions'
import { Link } from 'react-router'
import Post from './Post'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchPosts() )
	},

	render: function() {
		if ( ! this.props.posts.posts ) {
			return (
				<div className="loading-wrap">
					<div className="loading"><span className="fa fa-heart"></span> LOADING</div>
				</div>
			)
		}
		return (
			<ul className="Posts">
				{this.props.posts.posts.map( post => {
					return <li key={post.id}>
						<Post posts={this.props.posts} dispatch={this.props.dispatch} routeParams={{slug:post.slug}} />
					</li>
				})}
			</ul>
		)
	}
})
