import React from 'react'
import { Provider } from 'react-redux'
import App from './components/App'
import reducers from './reducers'
// Redux DevTools store enhancers
import thunkMiddleware from 'redux-thunk'
// React components for Redux DevTools
import createLogger from 'redux-logger'
import { compose, createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory';
import { Router, Route, Link } from 'react-router'
import BuyTickets from './components/BuyTickets'
import Intro from './components/Intro'

var logger = createLogger({
	level: 'info',
	collapsed: false
})

var AppWithReduxConnected = connect((state) => { return state } )(App)

const routes = (
	<ReduxRouter>
		<Route path="/" component={AppWithReduxConnected}>
			<Route path="tickets" component={BuyTickets} />
		</Route>
	</ReduxRouter>
);

const store = compose(
	applyMiddleware( thunkMiddleware, logger ),
	reduxReactRouter({createHistory})
)( createStore )( reducers )

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('app')
)
