import React, { useState, useReducer, useEffect } from "react";

import StateDropDown from "./components/StateDropDown";
import CountryDropDown from "./components/CountryDropDown";
import Question from "./components/Question";
import geolocation from "./helpers/geolocation";
import LocationForm from "./components/LocationForm";
import QuestionnaireForm from "./components/QuestionnaireForm";
import stateA from "./state";

function FormPage() {
  const [state, updateState] = useReducer(
    stateA.getReducer(),
    stateA.getInitialState()
  );

  const handleCoords = (value) => {
    updateState(stateA.updateInfected(value));

    if (state.local) {
      return;
    }
    geolocation.watchPosition(
      () => {
        updateState(stateA.updateLocal({ longitude: 1, latitude: 234 }));
      },
      (error) => {
        updateState(stateA.updateLocal({ longitude: 2, latitude: 234 }));
      }
    );
  };

  const RenderForm = (props) => {
    if (!props.hasLocal) {
      return <LocationForm />;
    }
    return <QuestionnaireForm />;
  };

  return (
    <div>
      {JSON.stringify(state)}
      <form class="ui form">
        <div class="two fields">
          <Question
            onChange={handleCoords}
            infected={state.infected}
          ></Question>
          <RenderForm hasLocal={state.local}></RenderForm>
        </div>

        <div class="ui button" tabindex="0">
          Submit Order
        </div>
      </form>
    </div>
  );
}

export default FormPage;

//var wpid = navigator.geolocation.watchPosition(showPosition, alert, {enableHighAccuracy:true, maximumAge:500, timeout:500});

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude ;
// }
