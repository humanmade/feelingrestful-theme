import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import StaticContainer from 'react-static-container'

module.exports = React.createClass({
	contextTypes: {
		location: React.PropTypes.object
	},

	getInitialState: function() {
		return {
			previousPathname: null
		}
	},

	componentWillReceiveProps: function(nextProps, nextContext) {
		if (nextContext.location.pathname !== this.context.location.pathname) {
			this.setState({ previousPathname: this.context.location.pathname })
		}
	},

	render: function() {
		const { children, ...props } = this.props
		const { previousPathname } = this.state

		return (
			<ReactCSSTransitionGroup {...props}>
				<StaticContainer
					key={previousPathname || this.context.location.pathname}
					shouldUpdate={!previousPathname}
				>
					{children}
				</StaticContainer>
			</ReactCSSTransitionGroup>
		)
	},

	componentDidUpdate: function() {
		if (this.state.previousPathname) {
			this.setState({ previousPathname: null })
		}
	}
})
