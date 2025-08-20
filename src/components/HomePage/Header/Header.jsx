import React, { useContext } from "react";
import "./Header.css";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import { StoreContext } from "../../../context/StoreContext";


function Header() {
  const { ref: headerContentsRef, inView: headerInView } = useInView();
  const {handleAnimation} = useContext(StoreContext);
  
  return (
    <header className="home-page-header">
        <Parallax speed={-15} className="header-parallax-bg header-bg-animate"></Parallax>
        <div ref={headerContentsRef} className={`header-contents ${handleAnimation(headerInView)}`}>
          <h1 className="header-title std-heading">Xan Butik: Elevating Men's Style</h1>
          <p className="header-description std-paragraph mi-auto">
            Discover Xan Butik's dedication to quality, style, and sophisticaion
            in modern menswear fashion online
          </p>
          <div className="header-widgets-container">
            <Button as={Link} id="LearnMore" to="/About" className="widget-learn-more-btn std-button">learn more</Button>
            <Button as={Link} id="ShopNow" to="/Store" data-type="inverted" className="widget-shop-now-btn std-button">shop now</Button>
          </div>
        </div>
    </header>
  );
}

export default Header;
