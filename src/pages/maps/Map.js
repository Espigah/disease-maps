import React, { useRef, useEffect } from "react";
import { Map, GoogleApiWrapper, Circle } from "google-maps-react";
import PropTypes from "prop-types";

import { useGoogleMaps } from "react-hook-google-maps";

import firebase from "./../../services/firebase";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    overflow: "none",
    height: "calc(100vh - 58px)",
    "@media (min-width: 600px)": {
      height: "calc(100vh - 67px)",
    },
    "@media (min-width: 0px) and (orientation: landscape)": {
      height: "calc(100vh - 50px)",
    },
  },
};

export const Geo = ({ classes }) => {
  const coords = { lat: -22.9228481, lng: -43.5497464 };
  const containerStyle = {
    height: "100%",
    width: "100%",
    position: "relative",
    overflow: "none",
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

  const drawCircle = ({ center, radius, fillColor, fillOpacity }) => {
    return new window.google.maps.Circle({
      center: center,
      radius: radius,
      fillColor: fillColor,
      fillOpacity: fillOpacity,
      map,
      strokeOpacity: 0,
    });
  };

  const drawSpotCircle = ({ lat, lng, date }) => {
    console.log("[ drawSpotCircle ]");
    let spot = drawCircle({
      center: { lat, lng },
      radius: 5,
      fillColor: "#FF0000",
      fillOpacity: 0.5,
    });

    let contagionArea = drawCircle({
      center: { lat, lng },
      radius: 10,
      fillColor: "#FF9A9A",
      fillOpacity: 0.1,
    });
  };

  const drawClumpingCircle = ({ lat, lng }) => {
    console.log("[ drawClumpingCircle ]");
    drawCircle({
      center: { lat, lng },
      radius: 10,
      fillColor: "#FCF10A",
      fillOpacity: 0.3,
    });
  };

  const drawSuspicionsCircle = ({ lat, lng }) => {
    console.log("[ drawSuspicionsCircle ]");
    let cityCircle2 = drawCircle({
      center: { lat, lng },
      radius: 20,
      fillColor: "#33E9FF",
      fillOpacity: 0.05,
    });
  };

  useEffect(() => {
    if (!map) {
      return;
    }

    async function fetchData() {
      const { clumping, spots, suspicions } = await firebase.getCoordinates();
      console.log(suspicions);
      clumping.map(drawClumpingCircle);
      suspicions.map(drawSuspicionsCircle);
      spots.map(drawSpotCircle);
    }
    fetchData();
  }, [map]);

  return (
    <div className={classes.root}>
      <div ref={ref} style={containerStyle} />
    </div>
  );
};

export default withStyles(styles)(Geo);
