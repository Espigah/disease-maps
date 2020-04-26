import React, { useState, useCallback, useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Question from "./components/Question";

import stateA from "./state";

import FormForInfected from "./components/FormForInfected";
import FormForNonInfected from "./components/FormForNonInfected";

import geolocation from "./helpers/geolocation";

import { Grid, Button, FormControl, Fade } from "@material-ui/core";

import firebase from "../../services/firebase";

import ReactGA from "react-ga";
function FormPage() {
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [isSending, setIsSending] = useState(false);
  const [coords, setCoords] = useState(false);
  const [state, updateState] = useReducer(
    stateA.getReducer(),
    stateA.getInitialState()
  );

  const handleCoords = (value) => {
    updateState(stateA.updateInfected(value));
  };

  const onClose = () => {
    //  history.push("/map");
  };

  const RenderForm = ({ infected }) => {
    if (infected === null) {
      return <></>;
    }
    if (infected) {
      return <FormForInfected />;
    } else {
      return <FormForNonInfected />;
    }
  };


  const saveLocation = useCallback(async () => {
    console.log("[ saveLocation ]", isSending, coords);
    // don't send again while we are sending
    if (isSending || !coords) return;
    // update state
    setIsSending(true);
    // send the actual request
    await firebase.add({ lat: coords.latitude, lng: coords.longitude });

    //history.push("/map");
  }, [isSending, coords]);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={10} sm={8} md={6}>
        <FormControl class="w-100">
          <div class="two fields">
            <Question
              onChange={handleCoords}
              infected={state.infected}
            ></Question>

            <RenderForm infected={state.infected}></RenderForm>
          </div>

          <div class="ui button" tabindex="0"></div>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default FormPage;

//var wpid = navigator.geolocation.watchPosition(showPosition, alert, {enableHighAccuracy:true, maximumAge:500, timeout:500});

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude ;
// }
