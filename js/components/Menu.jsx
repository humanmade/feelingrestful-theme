import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({

	propTypes: {
		menu: React.PropTypes.object.isRequired,
		onClick: React.PropTypes.func
	},

	render: function() {

		return (
			<ul className="Menu">
				{this.props.menu.items.map( item => {
					return <li key={item.name}><Link to={item.url}>{item.name}</Link></li>
				})}
			</ul>
		)
	}
})
