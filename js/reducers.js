import {combineReducers} from 'redux'
import {routerStateReducer} from 'redux-router';
import {findWhere} from 'underscore'

function posts(
	state = {
		speakers: [],
		workshops: [],
		posts: [],
		pages: [],
		pointsOfInterest: [],
		sponsors: [],
		testimonials: [],
		preview: null
	}, action
) {
	switch ( action.type ) {
		case 'UPDATE_SPEAKERS':
			state.speakers = action.speakers
			break
		case 'UPDATE_SPEAKER':
			if ( ! findWhere( state.speakers, {id: action.speaker.id} ) ) {
				state.speakers.push( action.speaker );
			}
			break
		case 'UPDATE_WORKSHOPS':
			state.workshops = action.workshops
			break
		case 'UPDATE_WORKSHOP':
			if ( ! findWhere( state.workshops, {id: action.workshop.id} ) ) {
				state.workshops.push( action.workshop )
			}
			break
		case 'UPDATE_SPONSORS':
			state.sponsors = action.sponsors
			break
		case 'UPDATE_POINTS_OF_INTEREST':
			state.pointsOfInterest = action.pointsOfInterest
			break
		case 'UPDATE_POSTS':
			state.posts = action.posts
			break
		case 'UPDATE_POST':
			if ( action.post && ! findWhere( state.posts, {id: action.post.id} ) ) {
				state.posts.push( action.post );
			}
			break
		case 'UPDATE_PAGES':
			state.pages = action.pages
			break
		case 'UPDATE_PAGE':
			if ( ! findWhere( state.pages, {id: action.page.id} ) ) {
				state.pages.push( action.page );
			}
			break
		case 'UPDATE_PREVIEW':
			state.preview = action.post
			break
		case 'UPDATE_TESTIMONIALS':
			state.testimonials = action.testimonials
			break
	}
	return {...state}
}

function menu( state = {items: []}, action ) {

	switch ( action.type ) {
		case 'UPDATE_MENU':
			return {...state, items: action.items}
	}

	return {...state}
}


function display( state = {consoleExpanded: false, showingMenu: false, isGoingBack: false}, action ) {

	switch ( action.type ) {
		case 'TOGGLED_CONSOLE':
			state.consoleExpanded = ! state.consoleExpanded
			break
		case 'TOGGLE_MENU':
			state.showingMenu = ! state.showingMenu
			break
		case '@@reduxReactRouter/routerDidChange':
			state.showingMenu = false
			break
	}

	return {...state}
}

var reducers = combineReducers( {
	menu,
	router: routerStateReducer,
	posts,
	display
} )

module.exports = reducers
