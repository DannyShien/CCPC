import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = ({ convertedDate, today }) => {
  // console.log(convertedDate, today);
  return (
    <div className="main__navbar">
      <Link to="/" className="nav__link">
        Previous Sermons
      </Link>

      {convertedDate === today ? (
        <Link to="/livesermon" className="nav__link">
          {/* NOTE: Maybe change name of live sermon to today's sermon? Link will become inactive after date changes... */}
          Live Sermon
        </Link>
      ) : (
        <div className="dead__link">Live Sermon</div>
      )}

      <Link to="/about" className="nav__link">
        About
      </Link>
    </div>
  );
};

export default Navbar;
