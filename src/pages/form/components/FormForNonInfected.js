import React from "react";

import { Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import Location from "./Location";

const styles = {
  root: {
    background: "linear-gradient(45deg, #88fe6b 30%, #53ffc7 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(128, 255, 105, .3)",
    color: "white",
    padding: "5px 30px 15px 30px",
    margin: "10px 5px",
  },
};

function FormForNonInfected({classes}) {
  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h5">
        Onde essa pessoa mora?
      </Typography>
      <div>
        <Location></Location>
      </div>
    </div>
  );
}

export default withStyles(styles)(FormForNonInfected);
