import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { reduxReactRouter, ReduxRouter } from 'redux-router'
import { Router, Route } from 'react-router'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'
import reducers from './reducers'
import createHistory from 'history/lib/createBrowserHistory';
import BuyTickets from './components/pages/BuyTickets'
import Intro from './components/pages/Intro'
import Speakers from './components/pages/Speakers'
import Speaker from './components/pages/Speaker'
import Sponsors from './components/pages/Sponsors'
import Posts from './components/pages/Posts'
import Page from './components/pages/Page'
import Post from './components/pages/Post'

var logger = createLogger({
	level: 'info',
	collapsed: false
})

var AppWithReduxConnected = connect(state => state )(App)

const routes = (
	<ReduxRouter>
		<Route path="/" component={AppWithReduxConnected}>
			<Route path="tickets" component={BuyTickets} />
			<Route path="/page/:slug" component={connect(state=>state)(Page)} />
			<Route path="speakers" component={connect(state=>state)(Speakers)} />
			<Route path="/speakers/:id" component={connect(state=>state)(Speaker)} />
			<Route path="sponsors" component={connect(state=>state)(Sponsors)} />
			<Route path="news" component={connect(state=>state)(Posts)} />
			<Route path="news/:slug" component={connect(state=>state)(Post)} />
			<Route path="" component={connect(state=>state)(Intro)} />
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
