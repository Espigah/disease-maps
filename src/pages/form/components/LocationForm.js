import React, { useState } from "react";
import Place from "./Place"
function LocationForm(props) {
  return (
    <div>
      <label for="huey">Onde vc esta agora?</label>
      <Place></Place>
    </div>
  );
}

export default LocationForm;
