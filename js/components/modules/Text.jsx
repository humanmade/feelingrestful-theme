import React from 'react'

module.exports = React.createClass( {
	propTypes: {
		body: React.PropTypes.string.isRequired
	},
	componentWillReceiveProps: function ( nextProps ) {
		if ( nextProps.body ) {
			nextProps.body = nextProps.body
			                          .replace( '<table', '<div class="table-wrapper"><table' )
			                          .replace( '</table>', '</table></div>' )
		}
	},
	render: function () {
		return (
			<section className="Text">
				<div className="inner">
					<div className="TextContent" dangerouslySetInnerHTML={{__html: this.props.body}}/>
				</div>
			</section>
		)
	}
} )
