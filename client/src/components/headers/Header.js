import React from "react";
import "../../stylesheet/Styles.css";
import "./Header.css";
import Navbar from "../navigations/Nav.js";
import Logo from "../../assets/ccpc_logo.png";

const Header = () => {
  return (
    <div className="header sticky">
      <div className="logo__container">
        <img className="logo__image" src={Logo} alt="church logo" />
      </div>
      <div className="main__title">
        <p>Crossings Community</p>
        <p>Presbyterian Church</p>
      </div>
      <Navbar sermons="Previous Sermons" live="Live Service" about="About" />
    </div>
  );
};
export default Header;
