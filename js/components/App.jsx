import React from 'react'
import Menu from './Menu'
import BuyTicketsButton from './BuyTicketsButton'
import Intro from './pages/Intro'
import APIConsole from './APIConsole'
import RouteCSSTransition from './RouteCSSTransitionGroup'

module.exports = React.createClass({

	handleToggleMenu: function() {
		this.props.dispatch({type:'TOGGLE_MENU'})
	},
	handleToggleExpandConsole: function() {
		this.props.dispatch({type: 'TOGGLED_CONSOLE'})
	},
	render: function() {

		return (
			<div className="App">
				<Menu isExpanded={this.props.display.showingMenu} onToggle={this.handleToggleMenu} currentPath={this.props.location.pathname} menu={this.props.menu} onClick={this.handleClickMenuItem} />
				<div className="page-content">
					<RouteCSSTransition
						component="div" transitionName={this.props.router.location.action === 'POP' ? 'card-back' : 'card' }
						transitionEnterTimeout={500} transitionLeaveTimeout={500}
						>
						<div className="page-transition">{this.props.children || <Intro {...this.props} />}</div>
					</RouteCSSTransition>
				</div>
				<APIConsole onExpand={this.handleToggleExpandConsole} isExpanded={this.props.display.consoleExpanded} />
			</div>
		)
	}
})
