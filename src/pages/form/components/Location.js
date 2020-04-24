import React from "react";

import { TextField, Grid } from "@material-ui/core";

function LocationForm(props) {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
      <Grid item xs={4}>
        <TextField id="code" label="Cep"  />
      </Grid>
      <Grid item xs={4}>
        <TextField id="city" label="Cidade"   />
      </Grid>
      <Grid item xs={4}>
        <TextField id="neighborhood" label="Bairro"  />
      </Grid>
      <Grid item xs={4}>
        <TextField id="street" label="Rua"  />
      </Grid>
      <Grid item xs={2}>
        <TextField id="number" label="Número"  />
      </Grid>
    </Grid>
  );
}

export default LocationForm;
