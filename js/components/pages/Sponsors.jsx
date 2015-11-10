import React from 'react'
import { fetchSponsors } from '../../actions'
import { Link } from 'react-router'
import { findWhere } from 'underscore'

module.exports = React.createClass({

	getInitialState: function() {
		return {
			showingSponsor: null
		}
	},

	componentDidMount: function() {
		this.props.dispatch( fetchSponsors() )
	},

	handleClickSponsor: function( sponsor ) {
		if ( this.state.showingSponsor !== sponsor.id ) {
			this.setState( { showingSponsor: sponsor.id })
		} else {
			this.setState( { showingSponsor: null })
		}
	},

	render: function() {
		if ( ! this.props.posts.sponsors.length ) {
			return (
				<div className="loading-wrap">
					<div className="loading"><span className="fa fa-heart"></span> LOADING</div>
				</div>
			)
		}

		var sponsorTiers = this.props.posts.sponsors.reduce( ( carry, sponsor ) => {

			if ( ! sponsor._embedded['http://v2.wp-api.org/term'] ) {
				var tier = ''
			} else {
				var tier = sponsor._embedded['http://v2.wp-api.org/term'][0][0].name
			}

			if ( findWhere( carry, { name: tier } ) ) {
				findWhere( carry, { name: tier } ).sponsors.push( sponsor )
			} else {
				carry.push({
					name: tier,
					sponsors:[sponsor]
				})
			}

			return carry
		}, [] )

		return (
			<div className="Sponsors">
				<h1>Meet Our Fabulous Sponsors</h1>

				<ul className="sponsor-tiers">
					{sponsorTiers.map( tier => {
						return <li key={tier.name}>
							<h3>{tier.name} Sponsors</h3>
							<ul className="sponsors">

								{tier.sponsors.map( sponsor => {
									return (
										<li key={sponsor.id}>
											<div className="sponsor-logo"><img src={sponsor._embedded['http://v2.wp-api.org/attachment'][0].source_url} /></div>
											<div className="sponsor-desc">
												<h4>{sponsor.title.rendered}</h4>
												<div dangerouslySetInnerHTML={{__html:sponsor.content.rendered}} />
											</div>
										</li>
									)
								})}
							</ul>
						</li>
					})}
				</ul>

				<div className="sponsor-packages">We’d love to see your company name here. <a href="https://hmn-uploads.s3.amazonaws.com/humanmade-production/uploads/sites/27/2015/04/RESTDaySponsorPackages.pdf">Download The Sponsorship packages</a> and <a href="mailto:events@humanmade.co.uk">Get in touch</a> to reserve your preferred sponsor option for A Day of REST.</div>
			</div>
		)
	}
})
