import React from 'react'
import { findWhere } from 'underscore'
import { fetchSpeaker } from '../../actions'

module.exports = React.createClass({

	componentDidMount: function() {
		if ( ! this.props.posts.preview ) {
			this.props.dispatch( fetchSpeaker( Number( this.props.routeParams.id ) ) )
		}
		window.addEventListener( 'scroll', this.eventListener  = () => {
			if ( this.refs.parallax ) {
				this.refs.parallax.style.backgroundPosition = "0 -" + window.scrollY + 'px'
			}
		})
	},

	componentWillUnmount: function() {
		window.removeEventListener( 'scroll', this.eventListener )
	},

	render: function() {
		var user = this.props.posts.preview || findWhere( this.props.posts.speakers, { id: Number( this.props.routeParams.id ) } )

		if ( ! user ) {
			return (
				<div className="loading-wrap">
					<div className="loading"><span className="fa fa-heart"></span> Loading</div>
				</div>
			)
		}

		return (
			<div className="SpeakerPage Page SinglePage">
				<div className="Page--header">
					<span className="site-logo"></span>
					<h1>
						<div className="inner">{user.title.rendered}</div>
					</h1>
				</div>
				<div className="Page--content">
					<div className="Speaker">
						<div className="inner">
							<h2>{user.company}</h2>
							{ user._embedded && user._embedded['wp:featuredmedia'] && <div
								className="parallax-image"
								ref="parallax"
								style={{backgroundImage: 'url(' + user._embedded['wp:featuredmedia'][0].source_url + ')'}}
							/> }
							<div dangerouslySetInnerHTML={{__html:user.content.rendered}} />
						</div>
					</div>
				</div>
			</div>
		)
	}
})
