import React from 'react'
import {fetchSponsors} from '../../actions'
import {findWhere} from 'underscore'

module.exports = React.createClass( {

	getInitialState: function () {
		return {
			showingSponsor: null
		}
	},

	componentDidMount: function () {
		this.props.dispatch( fetchSponsors() )
	},

	handleClickSponsor: function ( sponsor ) {
		if ( this.state.showingSponsor !== sponsor.id ) {
			this.setState( {showingSponsor: sponsor.id} )
		} else {
			this.setState( {showingSponsor: null} )
		}
	},

	render: function () {
		if ( ! this.props.posts.sponsors.length ) {
			return (
				<div className="loading-wrap sponsors">
					<div className="loading"><span className="fa fa-heart"></span> Finding sponsors...</div>
				</div>
			)
		}

		var sponsorTiers = this.props.posts.sponsors.reduce( ( carry, sponsor ) => {

			if ( ! sponsor._embedded['wp:term'] ) {
				var tier = ''
			} else {
				var tier = sponsor._embedded['wp:term'][0][0].name
			}

			if ( findWhere( carry, {name: tier} ) ) {
				findWhere( carry, {name: tier} ).sponsors.push( sponsor )
			} else {
				carry.push( {
					name: tier,
					sponsors: [sponsor]
				} )
			}

			return carry
		}, [] )

		var levelOrder = [
			'Platinum',
			'Diamond',
			'Gold',
			'Silver',
			'After Party',
			'Bronze',
			'Microsponsor'
		]

		sponsorTiers.sort( ( a, b ) => {

			if ( levelOrder.indexOf( a.name ) === - 1 ) {
				return 1
			}

			if ( levelOrder.indexOf( b.name ) === - 1 ) {
				return - 1
			}

			return levelOrder.indexOf( a.name ) > levelOrder.indexOf( b.name )
		} )

		return (
			<div className="Sponsors--full">
				<ul className="sponsor-tiers">
					{sponsorTiers.map( tier => {
						return <li key={tier.name} className={(
							tier.name
						).toLowerCase()}>
							<h3>{tier.name} Sponsors</h3>
							<ul className="sponsors">

								{tier.sponsors.map( sponsor => {
									return (
										<li key={sponsor.id}>
											{ sponsor._embedded && sponsor._embedded['wp:featuredmedia']
												? sponsor.url
													? <div className="patron-logo"><a href={sponsor.url}
													                                  target="_blank"><img
														src={sponsor._embedded['wp:featuredmedia'][0].source_url}/></a>
													</div>
													: <div className="patron-logo"><img
														src={sponsor._embedded['wp:featuredmedia'][0].source_url}/>
													</div>
												: ''
											}
											<div className="sponsor-desc">
												<div dangerouslySetInnerHTML={{__html: sponsor.content.rendered}}/>
											</div>
										</li>
									)
								} )}
							</ul>
						</li>
					} )}
				</ul>

			</div>
		)
	}
} )
