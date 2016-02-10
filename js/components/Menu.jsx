import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({

	propTypes: {
		menu: React.PropTypes.object.isRequired,
		onClick: React.PropTypes.func,
		currentPath: React.PropTypes.string,
		onToggle: React.PropTypes.func,
		isExpanded: React.PropTypes.bool
	},

	render: function() {

		return (
			<div className="menu-wrap Menu">
				<div onClick={this.props.onToggle} className="menu-toggle">
					<span className="fa fa-bars"></span>
				</div>
				<ul className={ this.props.isExpanded ? 'menu expanded' : 'menu' }>
					{this.props.menu.items.map( item => {
						return <li className={this.props.currentPath === item.url ? 'current' : ''} key={item.name}><Link to={item.url}>{item.name}</Link></li>
					})}
					
				</ul>
			</div>
		)
	}
})
