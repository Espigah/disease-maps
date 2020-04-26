import { Grid, TextField } from "@material-ui/core";
import React from "react";
import DropDownCity from "./DropDownCity";
import DropdownNeighborhood from "./DropdownNeighborhood";
import InputPostalCode from "./InputPostalCode";

import { connect } from "react-redux";

function LocationForm({ location , locationPin, namespace}) {
  const { city, street, neighborhood, number } = location;

  const onChangeNumber = (event) => {
    event.stopPropagation();
    //event.currentTarget.value;
  };
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
     
      
      <Grid item xs={4}>
        <InputPostalCode onChange={onChangeNumber} namespace={namespace}></InputPostalCode>
      </Grid>
      <Grid item xs={4}>
        <DropDownCity value={city} onChange={onChangeNumber} />
      </Grid>
      <Grid item xs={4}>
        <DropdownNeighborhood value={neighborhood} onChange={onChangeNumber} />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="street"
          label="Rua"
          value={street}
          onChange={onChangeNumber}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          id="number"
          label="Número"
          value={number}
          onChange={onChangeNumber}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = ({ location, locationPin }) => ({
  location,
  locationPin,
});
export default connect(mapStateToProps)(LocationForm);
