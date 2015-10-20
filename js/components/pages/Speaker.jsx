import React from 'react'
import { findWhere } from 'underscore'
import { fetchSpeaker } from '../../actions'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchSpeaker( Number( this.props.routeParams.id ) ) )
	},

	render: function() {
		var user = findWhere( this.props.speakers, { id: Number( this.props.routeParams.id ) } )

		if ( ! user ) {
			return <p>Loading</p>
		}

		return (
			<div className="Speaker">
				<h1>{user.title.rendered}</h1>

				<div dangerouslySetInnerHTML={{__html:user.content.rendered}} />
			</div>
		)
	}
})
