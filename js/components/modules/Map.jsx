import React from 'react'
import { GoogleMap, Marker } from "react-google-maps";

module.exports = React.createClass({
	propTypes: {
		pointsOfInterest: React.PropTypes.object
	},
	render: function() {
		return <div className="Map">
			<GoogleMap
				containerProps={{style:{height:'400px'}}}
				defaultCenter={{lat: 51.5186864, lng: -0.0809329}}
				defaultZoom={16}
				options={{scrollwheel: false}}
				ref="map"
				>
				<Marker place={{placeId:"ChIJu8wKS7IcdkgRHZScIsrv-yw", location: {lat: 51.5186864, lng: -0.0809329}}} />
			</GoogleMap>
		</div>
	}
})
