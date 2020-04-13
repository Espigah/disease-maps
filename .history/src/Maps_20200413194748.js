import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from 'react';
//const LoadingContainer = (props) => <div>Fancy loading container!</div>;

function MapContainer(props) {


    
  return (
    <Map google={this.props.google} zoom={14}>
      <Marker name={"Current location"} />

      <InfoWindow >
        <div>
          <h1></h1>
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCbdYlBtAHMkrKyv4jh8vYqWRT_d6AQfas",
})(MapContainer);
