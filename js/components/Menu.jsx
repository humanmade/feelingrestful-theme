import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({

	propTypes: {
		menu: React.PropTypes.object.isRequired,
		onClick: React.PropTypes.func,
		currentPath: React.PropTypes.string
	},

	render: function() {

		return (
			<ul className="Menu">
				{this.props.menu.items.map( item => {
					console.log( this.props.currentPath )
					console.log( item.url )
					return <li className={this.props.currentPath === item.url ? 'current' : ''} key={item.name}><Link to={item.url}>{item.name}</Link></li>
				})}
			</ul>
		)
	}
})
