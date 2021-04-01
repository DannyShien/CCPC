import React, { Component } from "react";
import "./Admin.css";
import AdminHeader from "../../components/headers/AdminHeader";
import Logo from "../../assets/ccpc_logo.png";
import AdminNav from "../../components/navigations/AdminNav";

class Admin extends Component {
  render() {
    return (
      <section className="admin">
        <AdminHeader logo={Logo} />
        <div className="admin__body">
          <AdminNav livevideo="Live Video" videocenter="Video Center" />
        </div>
      </section>
    );
  }
}

export default Admin;
