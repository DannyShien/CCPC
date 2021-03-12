import React from "react";
import "./Button.css";

const Button = ({ style, text }) => {
  return (
    <>
      <input className="button" type="submit" value={text} style={style} />
    </>
  );
};

export default Button;
