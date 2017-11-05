import React, { Component } from 'react';

// The following example uses https://maps.googleapis.com/maps/api/js as resource loaded from HTML
// instead of the reactified version library

// See https://developers.google.com/maps/documentation/javascript/reference for info on using Google Maps API
// See https://developers.google.com/maps/documentation/javascript/get-api-key for info on obtaining an API Key
export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

// The following example uses the reactified version of Google Maps library
// instead of https://maps.googleapis.com/maps/api/js as resource loaded from HTML
//
// import React from 'react';
// import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
//
// export default props => {
//   return (
//     <GoogleMapLoader
//       containerElement={ <div style={{height: '100%'}} /> }
//       googleMapElement={
//         <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
//       }
//     />
//   )
// }

