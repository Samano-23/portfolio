import React from "react";
import { Link } from "react-router-dom";
import "../style-menu.css";

const Menu = () => {
  return (
    <div>
      <section className="menu-bar">
        <Link to="/about" className="link">
          <span className="mask">
            <div className="link-container">
              <span className="link-title1 title">About</span>
              <span className="link-title2 title">About</span>
            </div>
          </span>
        </Link>
        <Link to="/contatti" className="link">
          <span className="mask">
            <div className="link-container">
              <span className="link-title1 title">Contatti</span>
              <span className="link-title2 title">Contatti</span>
            </div>
          </span>
        </Link>
        <Link to="/formazione" className="link">
          <span className="mask">
            <div className="link-container">
              <span className="link-title1 title">Formazione</span>
              <span className="link-title2 title">Formazione</span>
            </div>
          </span>
        </Link>
        <Link to="/esperienze" className="link">
          <span className="mask">
            <div className="link-container">
              <span className="link-title1 title">Esperienze</span>
              <span className="link-title2 title">Esperienze</span>
            </div>
          </span>
        </Link>
        <Link to="/progetti" className="link">
          <span className="mask">
            <div className="link-container">
              <span className="link-title1 title">Progetti</span>
              <span className="link-title2 title">Progetti</span>
            </div>
          </span>
        </Link>
      </section>
      <div className="menu-line"></div>
    </div>
  );
};

export default Menu;
