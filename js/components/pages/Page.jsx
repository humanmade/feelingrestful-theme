import React from 'react'
import { findWhere } from 'underscore'
import { fetchPageBySlug } from '../../actions'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchPageBySlug( this.props.routeParams.slug ) )
	},

	render: function() {
		var page = findWhere( this.props.pages, { slug: this.props.routeParams.slug } )

		if ( ! page ) {
			return <p>Loading</p>
		}

		return (
			<div className="Page">
				<h1>{page.title.rendered}</h1>

				<div dangerouslySetInnerHTML={{__html:page.content.rendered}} />
			</div>
		)
	}
})
