import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

const routes = (
  <Switch>
		<Route exact path="/" component={HomePage} />
		<Redirect to='/' />
  </Switch>
);

export default routes;
