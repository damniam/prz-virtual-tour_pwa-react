import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import {Home, TourApp, Error} from './pages';
import "./App.css";
import UnityPlaceholder from "./components/UnityPlaceholder";
import Navbar from "./components/Navbar";

const App = () => {

  return <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/tour" exact>
            <TourApp />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
}

export default App;
