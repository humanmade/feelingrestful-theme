import React from 'react'
import {fetchSpeakers} from '../../actions'
import {Link} from 'react-router'
import Loading from './Loading'
import Header from './Header'

module.exports = React.createClass( {

	componentDidMount: function () {
		this.props.dispatch( fetchSpeakers() )
	},

	render: function () {

		if ( ! this.props.posts.speakers.length ) {
			return (
				<div className="loading-wrap speakers">
					<div className="loading"><span className="fa fa-heart"></span> Gathering speakers...</div>
				</div>
			)
		}

		return (
			<section className="Speakers">
				{ this.props.heading && <Header {...this.props} /> }
				<div className="SpeakerList">
					{this.props.posts.speakers.map( speaker => {
						var attr = {key: speaker.id}
						if ( speaker._embedded && speaker._embedded['wp:featuredmedia'] ) {
							attr.style = {backgroundImage: 'url(' + speaker._embedded['wp:featuredmedia'][0].source_url + ')'}
						}
						return <Link to={'/speakers/' + speaker.id} className="speaker" {...attr}>
								<div className="speaker_hover">
									<p className="textcontainer">
										<span className="name">{speaker.title.rendered}</span>
										<span className="company">{speaker.company}</span>
									</p>
								</div>
							</Link>

					} )}
				</div>
			</section>
		)
	}
} )
