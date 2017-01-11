import React from 'react'
import {Link} from 'react-router'
import moment from 'moment'
import Button from './Button'

module.exports = React.createClass( {

	propTypes: {
		title: React.PropTypes.object.isRequired,
		content: React.PropTypes.object.isRequired,
		date: React.PropTypes.string.isRequired,
		slug: React.PropTypes.string.isRequired
	},

	onShare: function ( e ) {
		if ( typeof FB !== 'undefined' ) {
			e.preventDefault()
			FB.ui( {
				method: 'share',
				href: this.props.link,
			}, function ( response ) {
			} )
		}
	},

	render: function () {
		return (
			<section className="Post">
				<div className="inner">
					<header className="headline">
						<h1><Link to={'/news/' + this.props.slug} onlyActiveOnIndex={true}><span
							dangerouslySetInnerHTML={{__html: this.props.title.rendered}}/></Link></h1>
						<span className="date">Posted on {moment( this.props.date ).format( "D MMMM, YYYY" )}</span>
					</header>
					<div dangerouslySetInnerHTML={{__html: this.props.content.rendered}}/>

					<div className="share-buttons">
						<Button onClick={this.onShare} classes="ghost-button ghost-button--dark"
						        url={ 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent( this.props.link )}
						        icon="fa-facebook" text="Facebook" target="_blank"/>
						<Button classes="ghost-button ghost-button--dark"
						        url={ 'https://twitter.com/intent/tweet/?url=' + encodeURIComponent( this.props.link ) + '&amp;text=' + encodeURIComponent( 'A Day of Rest Boston: ' + this.props.title.rendered ) }
						        icon="fa-twitter" text="Twitter"/>
					</div>
				</div>
			</section>
		)
	}
} )
