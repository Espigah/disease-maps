import React from "react";

import { FormControlLabel, Radio, RadioGroup, Grid } from "@material-ui/core";

function Question(props) {
  const handleClick = (event) => {
    const value = Number(event.currentTarget.value);
    props.onChange(!!value);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <RadioGroup name="options" onChange={handleClick} row={true}>
        <FormControlLabel
          value="1"
          control={<Radio />}
          label="Estou infectado"
        />
        <FormControlLabel
          value="0"
          control={<Radio />}
          label="Conheco alguem infectado"
        />
      </RadioGroup>
    </Grid>
  );
}

export default Question;
