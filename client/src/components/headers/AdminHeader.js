import React from "react";
import { Link } from "react-router-dom";
import "./AdminHeader.css";
import "../../stylesheet/Styles.css";

const AdminHeader = ({ logo }) => {
  return (
    <div className="admin__header sticky">
      <div className="admin__title">
        <Link to="/" className="title__link">
          <h1>CCPC</h1>
        </Link>
        <h3>Admin</h3>
      </div>
      <img className="logo" src={logo} alt="church logo" />
    </div>
  );
};

export default AdminHeader;
