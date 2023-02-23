import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "../Admin/Admin";
import Home from "../Home/Home";
import Register from "../Register/Register";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/admin">
          <Admin />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes