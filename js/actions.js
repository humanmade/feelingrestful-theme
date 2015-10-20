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