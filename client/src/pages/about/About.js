import React, { Component } from "react";
import BodyNav from "../../components/navigations/BodyNav";

class About extends Component {
  render() {
    return (
      <>
        <BodyNav
          kim="Rev. Ki Kim's Bio"
          statement="Mission Statement"
          vision="Vision"
          contact="Contact Us"
        />
      </>
    );
  }
}

export default About;
