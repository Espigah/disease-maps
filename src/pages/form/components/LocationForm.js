import React from "react";

import { Typography, Grid, TextField, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import Location from "./Location";

import { addLocationItem } from "../../../store/locationList/actions";

import { changeFormState } from "../../../store/formForInfected/actions";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LOCATION_NAMESPACE_LOCATION } from "../../../store/location/namespaces";

const background = "linear-gradient(45deg, #6beafe 30%, #79e0ff 90%)";

const styles = {
  root: {
    background: background,
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(105, 165, 255, .3)",
    color: "white",
    padding: "5px 30px 15px 30px",
    margin: "10px 5px",
  },
};

function LocationForm(props) {
  const { classes } = props;
  const { addLocationItem, location, changeFormState } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h5">
        Onde você está agora?
      </Typography>
      <div>
        <Location namespace={LOCATION_NAMESPACE_LOCATION}></Location>
        <Grid item xs={2}>
          <TextField id="number" type="number" label="Dias infectados" />
        </Grid>
      </div>
      <Grid container direction="row" justify="flex-end" alignItems="flex-end">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addLocationItem({
              label: `[ ${location.postalCode} ] ${location.street}`,
              background,
              removeEnabled: false,
            });
            changeFormState({ local: location });
          }}
        >
          Confirmar
        </Button>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addLocationItem, changeFormState }, dispatch);

const mapStateToProps = ({ location }) => ({
  location,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LocationForm));
