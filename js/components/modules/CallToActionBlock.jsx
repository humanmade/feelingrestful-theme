import React from 'react'
import Button from '../Button'

module.exports = React.createClass({

	render: function () {
		var divStyle
		if ( this.props.bg_image ) {
			var bg_img_url = this.props.bg_image
			divStyle = {
				background: 'linear-gradient(rgba(34, 48, 63, 0.75), rgba(34, 48, 63, 0.85)), url(' + bg_img_url + ')',
				backgroundPosition: '50% 50%',
				backgroundSize: 'cover'
			}
		}
		return (
			<section className="Block Block--CallToAction" style={divStyle}>
				<div className="inner">
					{ this.props.image.length > 0 &&
						<img src={this.props.image[0][0]} title="A Day of Rest Boston"/>
					}
					<section className={ ! this.props.subheading ? 'text-wrap text-wrap--no-subheading' : 'text-wrap' } >
						{this.props.heading &&
							<h2 className="headline">{this.props.heading}</h2>
						}
						{ this.props.subheading &&
							<p>{this.props.subheading}</p>
						}
					</section>
					{ this.props.button.link && this.props.button.text ?
						<Button url={ this.props.button.link } text={ this.props.button.text } classes="ghost-button"/>
					: '' }
				</div>
			</section>
		)
	}

});
