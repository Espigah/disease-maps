import React from "react";

import { Fade, Grid } from "@material-ui/core";
import LocationItem from "./LocationItem";
import { connect } from "react-redux";

function LocationList({ locationList }) {
  const itemList = locationList.map((item) => (
    <Fade in={true}><LocationItem {...item}></LocationItem></Fade>
  ));
  console.log("[ itemList ]", itemList);
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {itemList}
    </Grid>
  );
}

const mapStateToProps = (store) => ({
  locationList: store.locationList,
});

export default connect(mapStateToProps)(LocationList);
