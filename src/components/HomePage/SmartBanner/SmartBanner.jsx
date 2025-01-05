import React from "react";
import "./SmartBanner.css";
import { useInView } from "react-intersection-observer";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

function SmartBanner() {
    const { ref: bannerContentsRef, inView: bannerInView } = useInView();

  return (
    <section className="smart-banner">
      <div ref={bannerContentsRef} className={`smart-banner-container ${bannerInView ? "animate-in" : ""}`}>
        <article className="smart-banner-text-container">
          <h1 className="smart-banner-cta-title">
            Don't miss out on these amazing deals!
          </h1>
          <p className="smart-banner-cta-paragraph std-paragraph">
            We are proud of what we've achieved, but we are not stopping there.
          </p>
        </article>
        <Button id="Explore" as={Link} to="/Cart" tabIndex="10" className="smart-banner-explore-btn std-button">Explore</Button>
      </div>
    </section>
  );
}

export default SmartBanner;
