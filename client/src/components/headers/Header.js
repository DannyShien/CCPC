import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import "./Header.css";
import Navbar from "../navigations/Nav.js";
import Logo from "../../assets/ccpc_logo.png";
import axios from "axios";

class Header extends Component {
  state = {
    convertedDate: "",
    dateNow: "",
  };

  componentDidMount() {
    this.getCurrentSermon();
  }

  getCurrentSermon = async () => {
    try {
      const sermonUrl = "http://localhost:5000/sermons";
      const sermonRequest = await axios.get(sermonUrl).then((res) => {
        return res.data;
      });
      let lastSermon = sermonRequest.slice(-1)[0];
      let convertedDate = new Date(lastSermon.input_date).toLocaleDateString();
      let dateNow = new Date().toLocaleDateString();

      this.setState({
        convertedDate,
        dateNow,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    const { convertedDate, dateNow } = this.state;

    return (
      <div className="header sticky">
        <div className="logo__container">
          <img className="logo__image" src={Logo} alt="church logo" />
        </div>
        <div className="main__title">
          <p>Crossings Community</p>
          <p>Presbyterian Church</p>
        </div>
        <Navbar inputDate={convertedDate} today={dateNow} />
      </div>
    );
  }
}
export default Header;
