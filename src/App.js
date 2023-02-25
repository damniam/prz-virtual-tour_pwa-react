import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, TourApp, Error } from "./pages";
import "./App.css";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    if (cookies.user === "userUpdate") return;
    removeCookie();
    setCookie("user", "userUpdate", { path: "/" }, { maxAge: 360000 });
  }, [cookies.user, removeCookie, setCookie]);

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/tour' exact>
            <TourApp />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
