import React from 'react'
import { fetchSponsors } from '../../actions'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchSponsors() )
	},

	render: function() {

		return (
			<ul className="Sponsors">
				{this.props.sponsors.map( sponsor => {
					return <li key={sponsor.id}>{sponsor.title.rendered}</li>
				})}
			</ul>
		)
	}
})
