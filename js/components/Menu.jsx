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
			<div className="menu-wrap">
				<div onClick={this.props.onToggle} className="menu-toggle">
					<span className="fa fa-bars"></span>
				</div>
				<ul className="menu" style={ this.props.isExpanded ? { display: 'block' } : {}}>
					{this.props.menu.items.map( item => {
						console.log( this.props.currentPath )
						console.log( item.url )
						return <li className={this.props.currentPath === item.url ? 'current' : ''} key={item.name}><Link to={item.url}>{item.name}</Link></li>
					})}
					<li className="powered-by"><a href="http://wordpress.org" target="_blank"><span className="fa fa-wordpress"></span></a></li>
				</ul>
			</div>
		)
	}
})
