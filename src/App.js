import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Home, TourApp, Error} from './pages';
import "./App.css";


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
