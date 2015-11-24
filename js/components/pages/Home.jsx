import React from 'react'
import { findWhere } from 'underscore'
import { fetchPageBySlug } from '../../actions'
import Text from '../modules/Text'
import Image from '../modules/Image'
import Blockquote from '../modules/Blockquote'
import Header from '../modules/Header'
import Map from '../modules/Map'
import TwitterTimeline from '../modules/TwitterTimeline'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchPageBySlug( 'index' ) )
	},

	render: function() {
		var page = findWhere( this.props.posts.pages, { slug: 'index' } )

		if ( ! page ) {
			return (
					<div className="loading-wrap">
						<div className="loading"><span className="fa fa-heart"></span> LOADING</div>
					</div>
			)
		}

		return (
				<div className="Posts">
					<div className="Post">
						<h1>{page.title.rendered}</h1>
						{page.page_builder.modules.map( Module => {
								switch ( Module.type ) {
										case 'text':
												return <Text {...Module.data} />
										case 'blockquote':
												return <Blockquote {...Module.data} />
										case 'image':
												return <Image {...Module.data} />
										case 'header':
												return <Header {...Module.data} />
										case 'map':
												return <Map {...Module.data} />
										case 'twitter_timeline':
												return <TwitterTimeline {...Module.data} />
										}
								return <div></div>
								})}
					</div>
				</div>
		)
	}
})
