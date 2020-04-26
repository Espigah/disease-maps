/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function DropDown({ options, label, id, value, onChange }) {
  id = id || label;
  return (
    <Autocomplete
      onChange={onChange}
      value={value}
      includeInputInList={true}
      id={id}
      options={options}
      getOptionLabel={(option) => option.title || option.label || ""}
      style={{ width: "92%" }}
      renderInput={(params) => (
        <TextField {...params} label={label}  />
      )}
    />
  );
}
