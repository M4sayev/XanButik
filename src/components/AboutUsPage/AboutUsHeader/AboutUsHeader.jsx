import React, { useContext } from 'react'
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import "./AboutUsHeader.css";
import { StoreContext } from '../../../context/StoreContext';

function AboutUsHeader() {

  const {ref: headerAboutRef, inView: headerAboutInView} = useInView();
  const {handleAnimation} = useContext(StoreContext);

  return (
    <header className="header-about-us">
      <Parallax speed={-15} className="header-parallax-bg header-bg-animate"></Parallax>
        <div ref={headerAboutRef} className={`header-contents-about-us ${handleAnimation(headerAboutInView)}`}>
          <h1 className="about-us-header-title std-heading">Classic Men's Apparel Collection</h1>
          <p className="about-us-header-paragraph std-paragraph">
          Discover our curated collection of classic men's apparel, where timeless elegance meets modern sophistication. From tailored suits to versatile shirts, our selection offers premium quality and impeccable style, ensuring you make a lasting impression with every outfit. Embrace the epitome of refined fashion.
          </p>
          <Button as={Link} to="/Testimonials" tabIndex="8" className="widget-learn-more-btn std-button">learn more</Button>
        </div>
    </header>
  )
}

export default AboutUsHeader
