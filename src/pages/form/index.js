import React, { useState, useCallback, useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Question from "./components/Question";

import stateA from "./state";

import FormForInfected from "./components/FormForInfected";
import FormForNonInfected from "./components/FormForNonInfected";

import geolocation from "./helpers/geolocation";

import { Grid, Button, FormControl, CircularProgress } from "@material-ui/core";

import firebase from "../../services/firebase";

function FormPage() {
  const history = useHistory();
  const [isSending, setIsSending] = useState(false);
  const [coords, setCoords] = useState(false);
  const [state, updateState] = useReducer(
    stateA.getReducer(),
    stateA.getInitialState()
  );

  const handleCoords = (value) => {
    updateState(stateA.updateInfected(value));
    saveLocation();
  };

  const onClose = () => {
    history.push("/map");
  };

  const RenderForm = ({ infected }) => {
    if (infected === null) {
      return <></>;
    }
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
    if (infected) {
      return <FormForInfected />;
    } else {
      return <FormForNonInfected />;
    }
  };

  const RenderButtons = ({ infected }) => {
    if (infected === null) {
      return <></>;
    }
    return <></>;
    return (
      <>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Fechar
        </Button>
        <Button variant="contained" color="primary">
          Confirmar
        </Button>
      </>
    );
  };

  useEffect(() => {
    geolocation.watchPosition(
      ({ latitude, longitude }) => {
        setCoords({ latitude, longitude });
        saveLocation();
        // updateState(state.updateLocal({ latitude, longitude }));
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }, []);

  const saveLocation = useCallback(async () => {
    // don't send again while we are sending
    if (isSending || !coords) return;
    // update state
    setIsSending(true);
    // send the actual request
    await firebase.add({ lat: coords.latitude, lng: coords.longitude });

    history.push("/map");
  }, [isSending, coords]);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6}>
        <FormControl class="w-100">
          <div class="two fields">
            <Question
              onChange={handleCoords}
              infected={state.infected}
            ></Question>
            <RenderForm infected={state.infected}></RenderForm>
          </div>

          <div class="ui button" tabindex="0">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-end"
            >
              <RenderButtons infected={state.infected}></RenderButtons>
            </Grid>
          </div>
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
