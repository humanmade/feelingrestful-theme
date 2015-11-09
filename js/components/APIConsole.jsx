import React from 'react'
import Api from '../api'

module.exports = React.createClass({
	propTypes: {
		isExpanded: React.PropTypes.bool.isRequired,
		onExpand: React.PropTypes.func
	},
	render: function() {

		if ( ! Api.lastRequest ) {
			return <div></div>
		}

		return (
			<div>
				{this.props.isExpanded
					?	<div className="api-display-wrap">
							<div className="api-display">
								<p>This page was rendered using the WP REST API, below we show the request and response data that was made.</p>

								<h2><strong>Request URL</strong></h2>
								<pre>{Api.lastRequest.method} <a href={'/wp-json' + Api.lastRequest.url}>{Api.lastRequest.url} {JSON.stringify( Api.lastRequest.args )}</a></pre>

								<h2><strong>Response Data</strong></h2>

								<pre>{JSON.stringify( Api.lastRequest.data, null, 2 )}</pre>
							</div>
						</div>
					:	''
				}
				<div className="APIConsole">
					<div onClick={this.props.onExpand} className="api-cta">
						<span className={'fa fa-chevron-' + ( this.props.isExpanded ? 'down' : 'up' )}></span> View API Request
					</div>
					<div className="api-output">
					 	{Api.lastRequest.method} <a href={'/wp-json' + Api.lastRequest.url}>{Api.lastRequest.url}</a>
						{Api.lastRequest.isLoading
							?	'Loading...'
							:	<span> <span className="fa fa-long-arrow-right"></span> {JSON.stringify( Api.lastRequest.data )}</span>
						}
					</div>
				</div>
			</div>
		)
	}
})
