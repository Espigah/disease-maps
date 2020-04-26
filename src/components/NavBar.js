import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import ExploreIcon from "@material-ui/icons/Explore";
import { useHistory } from "react-router-dom";

function NavBar() {
  const history = useHistory();

 
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Covid19</Typography>
        <Button color="inherit" onClick={() => history.push("/map")}>
          <ExploreIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
