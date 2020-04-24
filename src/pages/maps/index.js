import React from "react";
import Map from "./Map";

import ReactGA from "react-ga";

function MapsPage() {
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div>
      <Map />
    </div>
  );
}

export default MapsPage;
