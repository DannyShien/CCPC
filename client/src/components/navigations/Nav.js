import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = ({ isActive, isOpen, handleOpenBurger }) => {
  return (
    <>
      <nav className={isOpen ? "main__navbar active" : "main__navbar "}>
        <Link to="/" className="nav__link" onClick={handleOpenBurger}>
          Previous Sermons
        </Link>

        {isActive ? (
          <Link
            to="/liveservice"
            className="nav__link"
            onClick={handleOpenBurger}
          >
            Live Service
          </Link>
        ) : (
          <div className="dead__link">Live Service</div>
        )}

        <Link to="/about" className="nav__link" onClick={handleOpenBurger}>
          About
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
