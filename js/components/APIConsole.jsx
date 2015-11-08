import React from 'react'
import Api from '../api'

module.exports = React.createClass({
	render: function() {
		
		if ( ! Api.lastRequest ) {
			return <div></div>
		}
		return (
			<div className="APIConsole">
				<span>API Request</span> {Api.lastRequest.method} <a href={'/wp-json' + Api.lastRequest.url}>{Api.lastRequest.url}</a>
				{Api.lastRequest.isLoading
					?	'Loading...'
					:	<span> <span className="fa fa-long-arrow-right"></span> {JSON.stringify( Api.lastRequest.data )}</span>
				}
			</div>
		)
	}
})
