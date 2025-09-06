import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <footer className="main-footer">
      <img src={assets.logo_no_frame} alt="logo" className="logo" />
      <p>&#169; all rights reserved</p>
    </footer>
  );
}

export default Footer;
