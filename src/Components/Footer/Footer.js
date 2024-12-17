import React from "react";
import "./Footer.css";
import logo from "./../../Assets/logo.svg";
import grouplogo from "./../../Assets/grouplogo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-image">
          <img src={logo}></img>
          <img src={grouplogo}></img>
        </div>
        <div className="footer-info">&copy; 2025 IJEAE</div>
        <div className="footer-address" style={{ marginRight: "10px" }}>
          Email:{" "}
          <a href="mailto:editor.ijeae@gmail.com">editor.ijeae@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
