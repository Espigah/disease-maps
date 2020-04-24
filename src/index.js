import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import FormPage from "./pages/form";
import MapsPage from "./pages/maps";

import ReactGA from 'react-ga';


import {
  Grid,
  Button,
  FormControl,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";


ReactGA.initialize('UA-163949985-1');
ReactDOM.render(
  
  <React.StrictMode>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Covid19</Typography>
      </Toolbar>
    </AppBar>
    <Router>
      <Switch>
        <Route exact path="/">
          <FormPage />
        </Route>
        <Route path="/map">
          <MapsPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
