import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = ({ isActive }) => {
  return (
    <>
      <nav className="main__navbar">
        <div className="burger__menu">
          <span class="fas fa-bars"></span>
        </div>
        <Link to="/" className="nav__link">
          Previous Sermons
        </Link>

        {isActive ? (
          <Link to="/liveservice" className="nav__link">
            Live Service
          </Link>
        ) : (
          <div className="dead__link">Live Service</div>
        )}

        <Link to="/about" className="nav__link">
          About
        </Link>
      </nav>
      ]
    </>
  );
};

export default Navbar;
