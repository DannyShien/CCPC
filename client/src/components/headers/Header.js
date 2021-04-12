import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import "./Header.css";
import Navbar from "../navigations/Nav.js";
import Logo from "../../assets/ccpc_logo.png";
import axios from "axios";

class Header extends Component {
  state = {
    isActive: false,
  };

  componentDidMount() {
    this.checkForService();
  }

  checkForService = async () => {
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

  render() {
    const { isActive } = this.state;

    return (
      <div className="header sticky">
        <div className="logo__container">
          <img className="logo__image" src={Logo} alt="church logo" />
        </div>
        <div className="main__title">
          <p>Crossings Community</p>
          <p>Presbyterian Church</p>
        </div>
        <Navbar isActive={isActive} />
      </div>
    );
  }
}
export default Header;
