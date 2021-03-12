import React, { lazy, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CCPC from "../pages/landing/CCPC";
import Header from "../components/headers/Header";

const About = lazy(() => import("../pages/about/About"));
const Live = lazy(() => import("../pages/live/Live"));
const Admin = lazy(() => import("../pages/admin/Admin"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin" component={Admin} />

      <Fragment>
        <Header />
        <Route exact path="/" component={CCPC} />
        <Route path="/live" component={Live} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Fragment>
    </Switch>
  );
};

export default Routes;
