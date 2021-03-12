import React from "react";
import "./AdminHeader.css";
import "../../stylesheet/Styles.css";

const AdminHeader = ({ title, logo }) => {
  return (
    <div className="adminHeader sticky">
      <h1>{title}</h1>
      <img className="logo" src={logo} alt="church logo" />
    </div>
  );
};

export default AdminHeader;
