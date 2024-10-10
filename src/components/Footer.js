import React from "react";
import { Link } from "react-router-dom";
import "../style-menu.css";

const Footer = () => {
  return (
    <div>
      <span>Footer</span>
      <Link to="/about" className="link"></Link>
    </div>
  );
};

export default Footer;
