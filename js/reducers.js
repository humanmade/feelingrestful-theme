import { combineReducers } from 'redux'
import ObjectAssign from 'object-assign'
import { routerStateReducer } from 'redux-router';
import { findWhere } from 'underscore'

function speakers( state = [], action ) {
	switch ( action.type ) {
		case 'UPDATE_SPEAKERS':
			return action.speakers
			break
		case 'UPDATE_SPEAKER':
			if ( ! findWhere( state, { id: action.speaker.id } ) ) {
				state.push( action.speaker );
			}
			break
	}
	return state
}

function sponsors( state = [], action ) {
	switch ( action.type ) {
		case 'UPDATE_SPONSORS':
			return action.sponsors
			break
	}
	return state
}

function posts( state = [], action ) {
	switch ( action.type ) {
		case 'UPDATE_POSTS':
			return action.posts
			break
	}
	return state
}

function menu( state = {}, action ) {

	return {
		items: [
			{
				name: "Home",
				url: "/"
			},
			{
				name: "About",
				url: "/about/"
			},
			{
				name: "Speakers",
				url: "/speakers/"
			},
			{
				name: "News",
				url: "/news/"
			},
			{
				name: "Sponsors",
				url: "/sponsors/"
			},
			{
				name: "Hack Day",
				url: "/hack/"
			},
			{
				name: "Contact",
				url: "/contact/"
			}
		]
	}
}

var reducers = combineReducers({
	speakers,
	sponsors,
	posts,
	menu,
	router: routerStateReducer
})

module.exports = reducers
