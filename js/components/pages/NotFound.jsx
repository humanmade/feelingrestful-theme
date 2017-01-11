import React from 'react'
import Header from '../modules/Header'

module.exports = React.createClass({

	render: function() {

		return (
			<div className="Page 404">
				<div className="Page--header"></div>
				<div className="Page--content">
					<div className="inner">
						<Header heading="404: Page doesn't exist.." subheading="Well this is somewhat embarrassing. It looks like nothing was found at this location."/>
					</div>
				</div>
			</div>
		)
	}
})
