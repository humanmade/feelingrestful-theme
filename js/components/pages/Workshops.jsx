import React from 'react'
import { fetchWorkshops } from '../../actions'
import { Link } from 'react-router'

module.exports = React.createClass({

	componentDidMount: function() {
		this.props.dispatch( fetchWorkshops() )
	},

	render: function() {
		if ( ! this.props.posts.workshops.length ) {
			return (
				<div className="loading-wrap">
					<div className="loading"><span className="fa fa-heart"></span> Loading</div>
				</div>
			)
		}
		return (
			<ul className="Workshops">
				{this.props.posts.workshops.map( workshop => {
					var attr = { key: workshop.id }
					if ( workshop._embedded && workshop._embedded['wp:featuredmedia'] ) {
						attr.style = { backgroundImage: 'url(' + workshop._embedded['wp:featuredmedia'][0].source_url + ')' }
					}
					return <li {...attr}>
						<Link to={'/workshops/' + workshop.id}>
							<h2>{workshop.title.rendered}</h2>
						</Link>
					</li>
				})}
			</ul>
		)
	}
})

