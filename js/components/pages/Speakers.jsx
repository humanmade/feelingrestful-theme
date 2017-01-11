import React from 'react'
import { fetchSpeakers } from '../../actions'
import { Link } from 'react-router'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchSpeakers() )
	},

	render: function() {
		if ( ! this.props.posts.speakers.length ) {
			return (
				<div className="loading-wrap">
					<div className="loading"><span className="fa fa-heart"></span> Loading</div>
				</div>
			)
		}
		return (
			<ul className="Speakers">
				{this.props.posts.speakers.map( speaker => {
					var attr = { key: speaker.id }
					if ( speaker._embedded && speaker._embedded['wp:featuredmedia'] ) {
						attr.style = { backgroundImage: 'url(' + speaker._embedded['wp:featuredmedia'][0].source_url + ')' }
					}
					return <li {...attr}>
						<Link to={'/speakers/' + speaker.id}>
							<h2>{speaker.title.rendered}</h2>
							<h3>{speaker.company}</h3>
						</Link>
					</li>
				})}
			</ul>
		)
	}
})
