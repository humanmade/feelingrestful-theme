import Api from './api'

export function fetchSpeakers() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/speakers', {_embed: true, per_page: 100}, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch( {
				type: 'UPDATE_SPEAKERS',
				speakers: data
			} )
		} )
	}
}

export function fetchSpeaker( id ) {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/speakers/' + id, {_embed: true}, ( data, error ) => {

			if ( ! data || error ) {
				return;
			}
			dispatch( {
				type: 'UPDATE_SPEAKER',
				speaker: data
			} )
		} )
	}
}

export function fetchSponsors() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/sponsors', {_embed: true, per_page: 100}, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch( {
				type: 'UPDATE_SPONSORS',
				sponsors: data
			} )
		} )
	}
}

export function fetchPointsOfInterets() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/points-of-interest', {}, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch( {
				type: 'UPDATE_POINTS_OF_INTEREST',
				pointsOfInterest: data
			} )
		} )
	}
}

export function fetchPosts() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/posts', {per_page: 100}, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch( {
				type: 'UPDATE_POSTS',
				posts: data
			} )
		} )
	}
}

export function fetchPostBySlug( slug ) {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/posts', {filter: {name: slug}}, ( data, error ) => {
			if ( ! data || error ) {
				return;
			}
			dispatch( {
				type: 'UPDATE_POST',
				post: data[0]
			} )
		} )
	}
}

export function fetchPageBySlug( slug ) {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/pages', {filter: {name: slug}}, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch( {
				type: 'UPDATE_PAGE',
				page: data[0]
			} )
		} )
	}
}
