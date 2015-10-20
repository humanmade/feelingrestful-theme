import Api from './api'

export function fetchSpeakers() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/speaker', {}, ( data, error ) => {
			dispatch({
				type: 'UPDATE_SPEAKERS',
				speakers: data
			})
		})
	}
}

export function fetchSpeaker( id ) {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/speaker/' + id , {}, ( data, error ) => {
			dispatch({
				type: 'UPDATE_SPEAKER',
				speaker: data
			})
		})
	}
}

export function fetchSponsors() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/sponsor', {}, ( data, error ) => {
			dispatch({
				type: 'UPDATE_SPONSORS',
				sponsors: data
			})
		})
	}
}

export function fetchPosts() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/posts', {}, ( data, error ) => {
			dispatch({
				type: 'UPDATE_POSTS',
				posts: data
			})
		})
	}
}