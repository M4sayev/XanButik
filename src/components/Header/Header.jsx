import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <div className="header-parallax-bg"></div>
      <div className="header-contents">
        <h1 className="header-title">Xan Butik: Elevating Men's Style</h1>
        <p>
          Discover Xan Butik's dedication to quality, style, and sophisticaion
          in modern menswear fashion online
        </p>
        <div className="header-widgets-container">
          <button className="widget-learn-more-btn">learn more</button>
          <button data-type="inverted" className="widget-shop-now-btn">shop now</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
