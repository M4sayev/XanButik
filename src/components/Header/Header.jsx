import React from "react";
import "./Header.css";
import { Parallax } from "react-scroll-parallax";

function Header() {
  return (
    <div className="header">
        <Parallax speed={-20} className="header-parallax-bg"></Parallax>
        <div className="header-contents">
          <h1 className="header-title">Xan Butik: Elevating Men's Style</h1>
          <p className="header-description">
            Discover Xan Butik's dedication to quality, style, and sophisticaion
            in modern menswear fashion online
          </p>
          <div className="header-widgets-container">
            <button data-type="inverted" className="widget-learn-more-btn">learn more</button>
            <button className="widget-shop-now-btn">shop now</button>
          </div>
        </div>
    </div>
  );
}

export default Header;
