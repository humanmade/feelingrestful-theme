import React from 'react'
import Menu from './Menu'
import APIConsole from './APIConsole'
import RouteCSSTransition from './RouteCSSTransitionGroup'

module.exports = React.createClass( {

	handleToggleMenu: function () {
		this.props.dispatch( {type: 'TOGGLE_MENU'} )
	},
	handleToggleExpandConsole: function () {
		this.props.dispatch( {type: 'TOGGLED_CONSOLE'} )
	},
	handleToggleOtherEventsMenu: function () {
		this.props.dispatch( {type: 'TOGGLE_OTHER_EVENTS_MENU'} )
	},
	render: function () {
		return (
			<div className="App">
				<Menu isExpanded={this.props.display.showingMenu} onToggle={this.handleToggleMenu}
				      currentPath={this.props.location.pathname} menu={this.props.menu} dispatch={this.props.dispatch}
				      onClick={this.handleClickMenuItem}
				      isShowingOtherEvents={this.props.display.showingOtherEventsMenu}/>
				<div className="page-content">
					<RouteCSSTransition
						component="div"
						transitionName={this.props.router.location.action === 'POP' ? 'card-back' : 'card' }
						transitionEnterTimeout={500} transitionLeaveTimeout={500}
					>
						<div className="page-transition">{this.props.children }</div>
					</RouteCSSTransition>
				</div>
				<APIConsole onExpand={this.handleToggleExpandConsole} isExpanded={this.props.display.consoleExpanded}/>
			</div>
		)
	}
} )
