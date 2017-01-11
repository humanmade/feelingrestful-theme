import Api from './api'

export function fetchSpeakers() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/speakers', { _embed: true, per_page: 100 }, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_SPEAKERS',
				speakers: data
			})
		})
	}
}

export function fetchSpeaker( id ) {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/speakers/' + id, { _embed: true }, ( data, error ) => {

			if ( ! data || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_SPEAKER',
				speaker: data
			})
		})
	}
}

export function fetchWorkshops() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/workshops', { _embed: true, per_page: 100 }, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_WORKSHOPS',
				workshops: data
			})
		})
	}
}

export function fetchWorkshop( id ) {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/workshops/' + id, { _embed: true }, ( data, error ) => {
			if ( ! data || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_WORKSHOP',
				workshop: data
			})
		})
	}
}

export function fetchSponsors() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/sponsors', { _embed: true, per_page: 100 }, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_SPONSORS',
				sponsors: data
			})
		})
	}
}

export function fetchPointsOfInterets() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/points-of-interest', {}, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_POINTS_OF_INTEREST',
				pointsOfInterest: data
			})
		})
	}
}

export function fetchPosts() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/posts', { per_page: 100 }, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_POSTS',
				posts: data
			})
		})
	}
}

export function fetchPostBySlug( slug ) {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/posts', { filter: { name: slug } }, ( data, error ) => {
			if ( ! data || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_POST',
				post: data[0]
			})
		})
	}
}

export function fetchPreviewById( id, type ) {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/' + type + '/' + id + '/autosave', { _embed: true }, ( data, error ) => {
			if ( ! data || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_PREVIEW',
				post: data
			})
		})
	}
}

export function fetchPageBySlug( slug ) {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/pages', { filter: { name: slug } }, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_PAGE',
				page: data[0]
			})
		})
	}
}

export function fetchTestimonials() {
	return ( dispatch, getStore ) => {
		Api.get( '/wp/v2/testimonials', { _embed: true, per_page: 100 }, ( data, error ) => {
			if ( ! data.length || error ) {
				return;
			}
			dispatch({
				type: 'UPDATE_TESTIMONIALS',
				testimonials: data
			})
		})
	}
}

export function fetchMenubyLocation( location = 'primary_navigation' ) {
	return ( dispatch, getStore ) => {
		Api.get( '/wp-api-menus/v2/menu-locations/' + location, { _embed: true }, ( data, error ) => {
			if ( ! data || error ) {
				return 'error';
			}
			dispatch({
				type: 'UPDATE_MENU',
				hasData: true,
				items: data
			})
		})
	}
}
