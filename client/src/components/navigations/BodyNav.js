import React, { lazy, Fragment } from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import "../../stylesheet/Styles.css";
import "./BodyNav.css";

const Bio = lazy(() => import("../../pages/kimBio/Bio"));
const MissionStatement = lazy(() =>
  import("../../pages/missionStatement/MissionStatement")
);
const Vision = lazy(() => import("../../pages/vision/Vision"));
const Contact = lazy(() => import("../../pages/contact/ContactUs"));

const BodyNav = ({ kim, statement, vision, contact }) => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <section className="body__navbar">
        <Link to={`${url}/bio`} className="navbar__title">
          {kim}
        </Link>
        <Link to={`${url}/statement`} className="navbar__title">
          {statement}
        </Link>
        <Link to={`${url}/vision`} className="navbar__title">
          {vision}
        </Link>
        <Link to={`${url}/contact`} className="navbar__title">
          {contact}
        </Link>
      </section>

      <section className="container">
        <Switch>
          <Fragment>
            <Route exact path={"/about"} component={Bio} />
            <Route path={`${path}/bio`} component={Bio} />
            <Route path={`${path}/statement`} component={MissionStatement} />
            <Route path={`${path}/vision`} component={Vision} />
            <Route path={`${path}/contact`} component={Contact} />
          </Fragment>
        </Switch>
      </section>
    </>
  );
};

export default BodyNav;
