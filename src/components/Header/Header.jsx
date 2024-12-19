import React from "react";
import "./Header.css";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


function Header() {
  const { ref: headerContentsRef, inView } = useInView();
  
  return (
    <header>
        <Parallax speed={-15} className="header-parallax-bg header-bg-animate"></Parallax>
        <div ref={headerContentsRef} className={`header-contents ${inView ? "animate-in" : ""}`}>
          <h1 className="header-title">Xan Butik: Elevating Men's Style</h1>
          <p className="header-description">
            Discover Xan Butik's dedication to quality, style, and sophisticaion
            in modern menswear fashion online
          </p>
          <div className="header-widgets-container">
            <Button as={Link} id="LearnNowHome" to="/About" tabIndex="8" className="widget-learn-more-btn button">learn more</Button>
            <Button as={Link} id="ShopNowHome" to="/Cart" tabIndex="9" data-type="inverted" className="widget-shop-now-btn button">shop now</Button>
          </div>
        </div>
    </header>
  );
}

export default Header;
