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

import ReactGA from "react-ga";

import { Provider } from "react-redux";
import { Store } from "./store";
import NavBar from "./components/NavBar";

ReactGA.initialize("UA-163949985-1");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Provider store={Store}>
          <Route exact path="/">
            <FormPage />
          </Route>
          <Route path="/map">
            <MapsPage />
          </Route>
        </Provider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
