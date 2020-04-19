import React, { useRef, useEffect } from "react";
import { Map, GoogleApiWrapper, Circle } from "google-maps-react";
import PropTypes from "prop-types";

import { useGoogleMaps } from "react-hook-google-maps";

import firebase from "./../../services/firebase";

export const Geo = () => {
  const coords = { lat: -22.9228481, lng: -43.5497464 };
  const containerStyle = {
    height: "50vh",
    width: "100%",
    position: "relative",
  };

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords);
  });

  navigator.geolocation.watchPosition(
    (position) => {
      debugger;
      console.log(position.coords);
    },
    () => {},
    {
      enableHighAccuracy: true,
      maximumAge: 500,
      timeout: 500,
    }
  );

  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyCbdYlBtAHMkrKyv4jh8vYqWRT_d6AQfas",
    //"AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
    // NOTE: even if you change options later
    {
      center: coords,
      zoom: 17,
    }
  );

  useEffect(() => {
    if (!map) {
      return;
    }

    async function fetchData() {
      const addCircle = (step) => {
        console.log(step);
        let cityCircle = new window.google.maps.Circle({
          center: step,
          radius: 5,
          fillColor: "#FF0000",
          fillOpacity: 0.3,
          map,
          strokeOpacity: 0,
        });

        let cityCircle2 = new window.google.maps.Circle({
          center: step,
          radius: 10,
          fillColor: "#FFaa00",
          fillOpacity: 0.1,
          map,
          strokeOpacity: 0,
        });
      };

      const { clumping, spots } = await firebase.getCoordinates();
    
      clumping.map((clump) => {
        let cityCircle2 = new window.google.maps.Circle({
          center: clump.center,
          radius: clump.radius,
          fillColor: "#dd0000",
          fillOpacity: 0.05,
          map,
          strokeOpacity: 0,
        });
      });

      spots.map(addCircle);
    }
    fetchData();
  }, [map]);

  return (
    <div>
      <div ref={ref} style={containerStyle} />
    </div>
  );
};

export default Geo;
