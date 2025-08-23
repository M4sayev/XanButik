import React, { useContext } from 'react'
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import "./AboutUsHeader.css";
import { StoreContext } from '../../../context/StoreContext';

function AboutUsHeader() {

  const {ref: headerAboutRef, inView: headerAboutInView} = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const {handleAnimation} = useContext(StoreContext);

  return (
    <header className="header-about-us" aria-label="About Us Intro Section">
      <Parallax 
        speed={-15} 
        className="header-parallax-bg header-bg-animate"
        aria-hidden="true"
        role='img'
      ></Parallax>
        <div ref={headerAboutRef} className={`header-contents-about-us ${handleAnimation(headerAboutInView)}`}>
          <h1 className="about-us-header-title std-heading">Classic Men's Apparel Collection</h1>
          <p className="about-us-header-paragraph std-paragraph">
          Discover our curated collection of classic men's apparel, where timeless elegance meets modern sophistication. From tailored suits to versatile shirts, our selection offers premium quality and impeccable style, ensuring you make a lasting impression with every outfit. Embrace the epitome of refined fashion.
          </p>
          <Button 
            as={Link} to="/Testimonials" 
            className="widget-learn-more-btn std-button"
            aria-label="Learn more about customer testimonials"
          >learn more</Button>
        </div>
    </header>
  )
}

export default AboutUsHeader
