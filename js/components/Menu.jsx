import React from 'react'
import {Link} from 'react-router'
import MenuItem from './MenuItem.jsx'
import { fetchMenubyLocation } from '../actions'

module.exports = React.createClass({

	propTypes: {
		menu: React.PropTypes.object.isRequired,
		onClick: React.PropTypes.func,
		currentPath: React.PropTypes.string,
		onToggle: React.PropTypes.func,
		isExpanded: React.PropTypes.bool,
		showingOtherEventsMenu: React.PropTypes.bool
	},

	componentDidMount: function() {
		this.props.dispatch( fetchMenubyLocation( 'primary_navigation' ) )
	},

	render: function () {
		return (
			<nav className="Menu menu-wrap">
				<div className="inner">
					<div onClick={this.props.onToggle} className="menu-toggle">
						<span className="fa fa-bars"></span>
					</div>
					<div className="menu--other-events">
						<ul>
							{	this.props.menu.items.length === 0 ? '' : this.props.menu.items.filter( item => item.classes === 'event' ).map( item => {
								return <MenuItem key={item.text} url={item.url} text={item.text} date={item.description} currentPath={this.props.currentPath} />
							})
							}
						</ul>
					</div>
					<ul className={ this.props.isExpanded ? 'menu expanded' : 'menu' }>
						{  this.props.menu.items.filter( item => item.classes !== 'event' ).map( item => {
							return <MenuItem key={item.text} url={item.url} text={item.text} date={item.date} currentPath={this.props.currentPath} children={item.children} />
						} )}
						<li>
							<ul className="menu-social">
								<li ><a className="facebook" href="https://www.facebook.com/events/259920427689032/"></a></li>
								<li ><a className="twitter" href="http://twitter.com/feelingrestful"></a></li>
								<li ><Link className="social-link envelope" to="page/contact"/></li>
							</ul>
						</li>
					</ul>
					<ul className="buy-ticket">
						<li><a href="#">Buy Ticket</a></li>
					</ul>
				</div>
			</nav>
		)
	}
})
