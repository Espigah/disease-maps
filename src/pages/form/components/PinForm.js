import React from "react";

import { Typography, Grid, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import Location from "./Location";

import { addLocationItem } from "../../../store/locationList/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LOCATION_NAMESPACE_PIN } from "../../../store/location/namespaces";

const background = "linear-gradient(45deg, #e0b002 30%, #f3ab28 90%)";
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

function PinForm(props) {
  const { classes } = props;
  const { addLocationItem, location } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h6">
        Adicione os últimos lugares que você frequentou
        <br />
        (iniciando do últimoss lugar)
      </Typography>
      <div>
        <Location namespace={LOCATION_NAMESPACE_PIN}></Location>
      </div>
      <Grid container direction="row" justify="flex-end" alignItems="flex-end">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addLocationItem({
              label: `[ ${location.postalCode} ] ${location.street}`,
              background,
              removeEnabled: true,
            });
          }}
        >
          Adicionar
        </Button>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addLocationItem }, dispatch);

const mapStateToProps = (store) => ({
  location: store.location,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PinForm));
