import React from 'react'
import { fetchSpeakers } from '../actions'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchSpeakers() )
	},

	render: function() {

		return (
			<ul className="Speakers">
				{this.props.speakers.map( speaker => {
					return <li key={speaker.id}>{speaker.title.rendered}</li>
				})}
			</ul>
		)
	}
})
