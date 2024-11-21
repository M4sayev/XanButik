import React from "react";
import "./SmartBanner.css";
import { useInView } from "react-intersection-observer";

function SmartBanner() {
    const { ref: bannerContentsRef, inView: bannerInView } = useInView();

  return (
    <section className="smart-banner">
      <div ref={bannerContentsRef} className={`smart-banner-container ${bannerInView ? "animate-in" : ""}`}>
        <div className="smart-banner-text-container">
          <h1 className="smart-banner-cta-title">
            Don't miss out on these amazing deals!
          </h1>
          <p className="smart-banner-cta-paragraph">
            We are proud of what we've achieved, but we are not stopping there.
          </p>
        </div>
        <button className="smart-banner-explore-btn">Explore</button>
      </div>
    </section>
  );
}

export default SmartBanner;
