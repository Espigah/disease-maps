import React from "react";

import { TextField } from "@material-ui/core";
import { PostalCodeService } from "../../../services/address";

import { changeLocation } from "../../../store/location/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function InputCep(props) {
  const { changeLocation, namespace } = props;

  const handleChange = (event) => {
    event.stopPropagation();
    const value = event.currentTarget.value;
    if (value.length != 8) {
      return;
    }

    PostalCodeService.get(value).then((data) => {
      changeLocation(namespace, data);
    });
  };
  return (
    <TextField
      id="code"
      label="Cep"
      type="number"
      style={{ width: "92%" }}
      InputProps={{
        inputProps: {
          maxLength: 8,
          minLength: 8,
          required: true,
          width: "100%",
        },
      }}
      onChange={handleChange}
    />
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeLocation }, dispatch);

export default connect(null, mapDispatchToProps)(InputCep);
