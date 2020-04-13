import React, { useRef } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';

export const Geo = ({ google }) => {
  console.log(google);
  const mapRef = useRef(null);

  return (
    <Map 
        ref={mapRef}
		google={google}
		containerStyle={{
          height: '40vh',
          width: '100%',
          position: 'relative',
        }}
        center={{
           lat: 40.854885,
           lng: -88.081807
         }}
         zoom={15}

	/>
  );
};

Geo.propTypes = {
  google: PropTypes.shape({}).isRequired,
};

Geo.defaultProps = {
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCbdYlBtAHMkrKyv4jh8vYqWRT_d6AQfas", // google maps key
  libraries: ['places'],
})(Geo);
