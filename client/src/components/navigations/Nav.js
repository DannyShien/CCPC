import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Navbar = ({ prevSermons, liveSermons, about }) => {
  return (
    <div className="main__navbar">
      <Link to="/" className="nav__link">
        {prevSermons}
      </Link>

      <Link to="/livesermons" className="nav__link">
        {liveSermons}
      </Link>

      <Link to="/about" className="nav__link">
        {about}
      </Link>
    </div>
  );
};

export default Navbar;
