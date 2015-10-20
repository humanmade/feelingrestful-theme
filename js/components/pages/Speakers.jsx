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
					return <li key={speaker.id}><Link to={'/speakers/' + speaker.id}>{speaker.title.rendered}</Link></li>
				})}
			</ul>
		)
	}
})
