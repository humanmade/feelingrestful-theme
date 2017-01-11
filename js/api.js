import jQuery from 'jquery';

module.exports = {

	api_url: app_data.api_url,

	lastRequest: null,

	get: function( url, data, callback ) {

		return this.request( 'GET', url, data, callback );
	},

	post: function( url, data, callback ) {

		return this.request( 'POST', url, data, callback );
	},

	request: function( method, url, data, callback ) {

		var lastRequest = {
			method: method,
			url: url,
			args: data,
			isLoading: true,
			data: null
		}

		var xhr = jQuery.ajax( this.api_url + url, {
			data: data,
			success: ( data ) => {
				this.lastRequest = lastRequest
				this.lastRequest.isLoading = false
				this.lastRequest.data = data
				if ( ! callback ) {
					return;
				}
				callback( data, null, xhr.getAllResponseHeaders() );
			},
			method: method,
			beforeSend: ( jqxhr ) => {
				jqxhr.setRequestHeader( 'X-WP-Nonce', app_data.nonce )
			}
		} );

		xhr.fail( err => {
			this.lastRequest = lastRequest
			this.lastRequest.isLoading = false

			if (xhr.status === 0) {
				if (xhr.statusText === 'abort') {
					// Has been aborted
					return;
				} else {
				  	// Offline mode
				}
			}

			if ( err.responseJSON && err.responseJSON[0] ) {
				this.lastRequest.data = err.responseJSON[0]
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
