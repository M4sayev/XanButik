import React, { useRef } from "react";
import "./Header.css";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";

function Header() {
  
  const { ref: headerContentsRef, inView } = useInView();

  return (
    <header>
        <Parallax speed={-20} className="header-parallax-bg"></Parallax>
        <div ref={headerContentsRef} className={`header-contents ${inView ? "animate-in" : ""}`}>
          <h1 className="header-title">Xan Butik: Elevating Men's Style</h1>
          <p className="header-description">
            Discover Xan Butik's dedication to quality, style, and sophisticaion
            in modern menswear fashion online
          </p>
          <div className="header-widgets-container">
            <button tabIndex="8" className="widget-learn-more-btn">learn more</button>
            <button tabIndex="9" data-type="inverted" className="widget-shop-now-btn">shop now</button>
          </div>
        </div>
    </header>
  );
}

export default Header;
