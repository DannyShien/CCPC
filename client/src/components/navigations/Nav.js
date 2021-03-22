import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = ({ prevSermons, liveSermon, about }) => {
  return (
    <div className="main__navbar">
      <Link to="/" className="nav__link">
        {prevSermons}
      </Link>

      <Link to="/livesermon" className="nav__link">
        {liveSermon}
      </Link>

      <Link to="/about" className="nav__link">
        {about}
      </Link>
    </div>
  );
};

export default Navbar;
