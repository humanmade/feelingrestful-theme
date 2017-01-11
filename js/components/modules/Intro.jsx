import React from 'react'
import Button from '../Button'

module.exports = React.createClass({

	render: function() {
		return (
			<section className="Intro">
				<div className="inner">
					{ this.props.image[0][0] ?
						<img src={this.props.image[0][0]} title="A Day of Rest Boston"/>
					: '' }
					{ this.props.intro_text ?
						<h2 dangerouslySetInnerHTML={{__html:this.props.intro_text }} />
					: '' }
					{ this.props.button_url && this.props.button_text ?
						<Button url={ this.props.button_url } text={ this.props.button_text }/>
					: '' }
					<video autoPlay loop muted poster="/content/themes/ador-boston-2016/assets/images/poster.jpg" id="video">
						<source src="/content/themes/ador-boston-2016/assets/adayofrest-boston.mp4" type="video/mp4" />
					</video>
				</div>
			</section>
		)
	}

});
