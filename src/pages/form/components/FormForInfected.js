import React, { useReducer, useEffect } from "react";
import LocationForm from "./LocationForm";
import PinForm from "./PinForm";

import geolocation from "../helpers/geolocation";
import state from "../state";

import { Grid, makeStyles } from "@material-ui/core";

import LocationList from "./LocationList";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

const useStyles = makeStyles({
  root: {},
  locationListGrid: {
    margin: "30px 0",
  },
});

function FormForInfected({ formForInfected }) {
  const classes = useStyles();
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

  const DrawForm = ({ hasLocal }) => {
    if (!hasLocal) {
      return <LocationForm />;
    }
    return <PinForm />;
  };

  return (
    <>
      {JSON.stringify(formForInfected)}
      <DrawForm hasLocal={formForInfected.local} />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-end"
        className={classes.locationListGrid}
      >
        <LocationList></LocationList>
      </Grid>
    </>
  );
}

const mapStateToProps = ({ formForInfected }) => ({
  formForInfected,
});
export default connect(mapStateToProps)(FormForInfected);
