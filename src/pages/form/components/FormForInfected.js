import React, { useReducer, useEffect } from "react";
import LocationForm from "./LocationForm";
import QuestionnaireForm from "./QuestionnaireForm";

import geolocation from "../helpers/geolocation";
import state from "../state";

function FormForInfected(props) {
  const [_, updateState] = useReducer(
    state.getReducer(),
    state.getInitialState()
  );

  useEffect(() => {
    geolocation.watchPosition(
      ({ latitude, longitude }) => {
        updateState(state.updateLocal({ latitude, longitude }));
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }, []);

  if (!props.hasLocal) {
    return <LocationForm />;
  }
  return <QuestionnaireForm />;
}

export default FormForInfected;
