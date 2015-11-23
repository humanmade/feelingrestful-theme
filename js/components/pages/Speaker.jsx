import React from 'react'
import { findWhere } from 'underscore'
import { fetchSpeaker } from '../../actions'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchSpeaker( Number( this.props.routeParams.id ) ) )
		window.addEventListener( 'scroll', this.eventListener  = () => {
			this.refs.parallax.style.backgroundPosition = "0 -" + window.scrollY + 'px'
		})
	},

	componentWillUnmount: function() {
		window.removeEventListener( 'scroll', this.eventListener )
	},

	render: function() {
		var user = findWhere( this.props.posts.speakers, { id: Number( this.props.routeParams.id ) } )

		if ( ! user ) {
			return (
				<div className="loading-wrap">
					<div className="loading"><span className="fa fa-heart"></span> LOADING</div>
				</div>
			)
		}

		return (
			<div className="Posts">
				<div className="Speaker">
					<h1>{user.title.rendered}</h1>
					<h2>{user.company}</h2>
					<div
						className="parallax-image"
						ref="parallax"
						style={{backgroundImage: 'url(' + user._embedded['https://api.w.org/attachment'][0].source_url + ')'}}
						/>
					<div dangerouslySetInnerHTML={{__html:user.content.rendered}} />
				</div>
			</div>
		)
	}
})
