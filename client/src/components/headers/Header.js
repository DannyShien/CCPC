import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import "./Header.css";
import Navbar from "../navigations/Nav.js";
import Logo from "../../assets/ccpc_logo.png";
import axios from "axios";

class Header extends Component {
  state = {
    isActive: false,
    isOpen: false,
  };

  componentDidMount() {
    this.checkForSermon();
  }

  checkForSermon = async () => {
    try {
      const sermonUrl = "http://localhost:5000/sermons";
      const sermonRequest = await axios.get(sermonUrl).then((res) => {
        return res.data;
      });
      let isSermon = sermonRequest.length;

      if (isSermon !== 0) {
        this.setState({ isActive: true });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  openBurger = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isActive, isOpen } = this.state;

    return (
      <>
        <div className={isOpen ? "header sticky active" : "header sticky"}>
          <div className="header__content">
            <div className="logo__container">
              <img className="logo__image" src={Logo} alt="church logo" />
            </div>
            <div className="main__title">
              <p>Crossings Community</p>
              <p>Presbyterian Church</p>
            </div>
          </div>

          <Navbar
            isActive={isActive}
            isOpen={isOpen}
            handleOpenBurger={this.openBurger}
          />

          <div
            className={isOpen ? "burger toggle" : "burger"}
            onClick={this.openBurger}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
