import React from 'react'
import ReactDOM from 'react-dom'
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import {reduxReactRouter, ReduxRouter} from 'redux-router'
import {Router, Route, IndexRoute} from 'react-router'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'
import reducers from './reducers'
import createHistory from 'history/lib/createBrowserHistory'
import useBasename from 'history/lib/useBasename'
import withScroll from 'scroll-behavior'
import BuyTickets from './components/pages/BuyTickets'
import Speakers from './components/pages/Speakers'
import Speaker from './components/pages/Speaker'
import Workshops from './components/pages/Workshops'
import Workshop from './components/pages/Workshop'
import Posts from './components/pages/Posts'
import Page from './components/pages/Page'
import Post from './components/pages/Post'
import Preview from './components/Preview'
import NotFound from './components/pages/NotFound'


var logger = createLogger( {
	level: 'info',
	collapsed: false
} )

var AppWithReduxConnected = connect( state => state )( App )

const history = withScroll( useBasename( createHistory )( {basename: app_data.base} ), ( prevLocation, location ) => (
	prevLocation && location.pathname === prevLocation.pathname ? [0, 0] : true
) )

const routes = (
	<ReduxRouter>
		<Route path="/" component={AppWithReduxConnected}>
			<Route component={connect( state => state )( Preview )}>
				<IndexRoute component={connect( state => state )( Page )}/>
				<Route path="page/:slug" component={connect( state => state )( Page )}/>
				<Route path="speakers" component={connect( state => state )( Speakers )}/>
				<Route path="speakers/:id" component={connect( state => state )( Speaker )}/>
				<Route path="workshops" component={connect( state => state )( Workshops )}/>
				<Route path="workshops/:id" component={connect( state => state )( Workshop )}/>
				<Route path="news" component={connect( state => state )( Posts )}/>
				<Route path="news/:slug" component={connect( state => state )( Post )}/>
				<Route path="*" component={NotFound}/>
			</Route>
		</Route>
	</ReduxRouter>
);

const store = compose(
	applyMiddleware( thunkMiddleware, logger ),
	reduxReactRouter( {history} )
)( createStore )( reducers )

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById( 'app' )
)
