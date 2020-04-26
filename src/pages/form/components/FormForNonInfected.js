import React from "react";

import { Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import Location from "./Location";
import { LOCATION_NAMESPACE_SOMEONE } from "../../../store/location/namespaces";

const styles = {
  root: {
    background: "linear-gradient(45deg, #04da28 30%, #a6ff8a 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(128, 255, 105, .3)",
    color: "white",
    padding: "5px 30px 15px 30px",
    margin: "10px 5px",
  },
};

function FormForNonInfected({ classes, style }) {
  return (
    <div className={classes.root} style={style}>
      <Typography variant="h4" component="h5">
        Onde essa pessoa mora?
      </Typography>
      <div>
        <Location namespace={LOCATION_NAMESPACE_SOMEONE}></Location>
      </div>
    </div>
  );
}

export default withStyles(styles)(FormForNonInfected);
