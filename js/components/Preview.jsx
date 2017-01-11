import React from 'react'
import Post from './pages/Post'
import Page from './pages/Page'
import Speaker from './pages/Speaker'
import { fetchPreviewById } from '../actions'

module.exports = React.createClass({

	willPreview: false,

	componentWillMount: function() {
		var query = this.props.router.location.query;

		// Dispatch preview
		if ( query.preview ) {
			this.willPreview = true
			this.props.dispatch( fetchPreviewById(
				query.p || app_data.post_id, app_data.type
			) )
		}
	},
	
	render: function() {

		if ( this.props.posts.preview ) {
			switch ( this.props.posts.preview.parent_type ) {
				case 'post' :
					return <Post {...this.props} />
				case 'page' :
					return <Page {...this.props} />
				case 'speaker':
					return <Speaker {...this.props} />
			}
		}

		return this.willPreview ? <div></div> : this.props.children
	}
	
})