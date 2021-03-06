import React, { lazy, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CCPC from "../pages/landing/CCPC";
import Header from "../components/headers/Header";

const About = lazy(() => import("../pages/about/About"));
const LiveService = lazy(() => import("../pages/liveService/LiveService"));
const Admin = lazy(() => import("../pages/admin/Admin"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin" component={Admin} />

      <Fragment>
        <Header />
        {/* NOTE: Possibly change path name to /crossingcommunitypresbyterianchurch */}
        <Route exact path="/" component={CCPC} />
        <Route path="/liveservice" component={LiveService} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Fragment>
    </Switch>
  );
};

export default Routes;
