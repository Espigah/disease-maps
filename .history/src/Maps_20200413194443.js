import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from 'react';
//const LoadingContainer = (props) => <div>Fancy loading container!</div>;

function MapContainer() {
  return (
    <Map google={this.props.google} zoom={14}>
      <Marker onClick={this.onMarkerClick} name={"Current location"} />

      <InfoWindow onClose={this.onInfoWindowClose}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCbdYlBtAHMkrKyv4jh8vYqWRT_d6AQfas",
})(MapContainer);
