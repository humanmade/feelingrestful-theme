import React from 'react'
import {fetchSponsors} from '../../actions'
import {Link} from 'react-router'
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
			<div className="Sponsors">
				<div className="inner">
					<h2 className="headline">{this.props.heading}</h2>

					{sponsorTiers.filter( tier => {
						if ( tier.name === 'Gold' || tier.name === 'Platinum' ) {
							return tier;
						}
					} ).map( tier => {
						return <section className={ 'sponsor-level ' + tier.name.toLowerCase() } key={tier.name}>
							<h3><span>{tier.name + ' Sponsors'}</span></h3>

							<ul>
								{tier.sponsors.map( sponsor => {
									return (
										sponsor._embedded && sponsor._embedded['wp:featuredmedia'] &&
										<li key={sponsor.id}>
											<img src={sponsor._embedded['wp:featuredmedia'][0].source_url}/>
										</li>
									)
								} )}
							</ul>
						</section>
					} )}

					{ this.props.become_a_sponsor_button.link && this.props.become_a_sponsor_button.text ?
						<Link to={this.props.become_a_sponsor_button.link}
						      className="Button">{this.props.become_a_sponsor_button.text}</Link>
						: '' }

					<Link to={`/page/sponsors/`}
					      className="Link Secondary-Link"><span>See all event sponsors</span></Link>

				</div>
			</div>
		)
	}
} )
