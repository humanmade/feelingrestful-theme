import jQuery from 'jquery';

module.exports = {

	api_url: '/wp-json',

	get: function( url, data, callback ) {

		return this.request( 'GET', url, data, callback );
	},

	post: function( url, data, callback ) {

		return this.request( 'POST', url, data, callback );
	},

	request: function( method, url, data, callback ) {

		var xhr = jQuery.ajax( this.api_url + url, {
			data: data,
			success: ( data ) => {

				if ( ! callback ) {
					return;
				}
				callback( data, null, xhr.getAllResponseHeaders() );
			},
			method: method
		} );

		xhr.fail( function( err ) {

			if (xhr.status === 0) {
				if (xhr.statusText === 'abort') {
					// Has been aborted
					return;
				} else {
				  	// Offline mode
				}
			}

			if ( err.responseJSON && err.responseJSON[0] ) {

				if ( ! callback ) {
					return;
				}
				callback( null, err.responseJSON[0] );
			} else {
				alert( err.statusText );
			}
		} );

		return xhr;
	},
}
