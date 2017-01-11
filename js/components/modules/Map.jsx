import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

module.exports = React.createClass( {
	propTypes: {
		latitude: React.PropTypes.string,
		longitude: React.PropTypes.string,
		place_id: React.PropTypes.string,
		zoom: React.PropTypes.number
	},
	render: function () {
		return (
			<GoogleMapLoader
				containerElement={
					<div {...this.props} className="Map" style={{height: '400px'}}/>
				}
				googleMapElement={
					<GoogleMap
						defaultCenter={{lat: Number( this.props.latitude ), lng: Number( this.props.longitude )}}
						defaultZoom={Number( this.props.zoom )}
						options={{scrollwheel: false}}
						ref="map">
						<Marker place={{
							placeId: this.props.place_id,
							location: {lat: Number( this.props.latitude ), lng: Number( this.props.longitude )}
						}}/>
					</GoogleMap>
				}
			/>
		)
	}
} )
