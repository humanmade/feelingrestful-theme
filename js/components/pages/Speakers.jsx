import React from 'react'
import { fetchSpeakers } from '../../actions'
import { Link } from 'react-router'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchSpeakers() )
	},

	render: function() {

		return (
			<ul className="Speakers">
				{this.props.speakers.map( speaker => {
					return <li key={speaker.id} style={{backgroundImage: 'url(' + speaker._embedded['http://v2.wp-api.org/attachment'][0].source_url + ')'}}>
						<Link to={'/speakers/' + speaker.id}>
							<h2>{speaker.title.rendered}</h2>
						</Link>
					</li>
				})}
			</ul>
		)
	}
})
