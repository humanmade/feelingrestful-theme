import React from 'react'

module.exports = React.createClass({

	render: function () {
		return (
			<section className="BuyYourTicket">
				<div className="inner">
					<h2 className="headline">{this.props.heading}</h2>
					{ this.props.subheading ?
						<p>{this.props.subheading}</p>
					: '' }
				</div>
			</section>
		)
	}

});
