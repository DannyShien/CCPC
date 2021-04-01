import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = ({ inputDate, today }) => {
  // console.log(inputDate, today);
  return (
    <div className="main__navbar">
      <Link to="/" className="nav__link">
        Previous Sermons
      </Link>

      {inputDate === today ? (
        <Link to="/livesermon" className="nav__link">
          {/* NOTE: Maybe change name of live sermon to sunday sermon? Link will become inactive after date changes... */}
          Sunday Sermon
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
