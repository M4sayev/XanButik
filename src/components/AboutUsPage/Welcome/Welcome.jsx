import React from "react";
import "./Welcome.css";
import { assets } from "../../../assets/assets";
import { useInView } from "react-intersection-observer";
import { handleAnimation } from "../../../utils/utils";

function Welcome() {
  const { ref: welcomeTextAreaRef, inView: welcomeTextInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: welcomeImgRef, inView: welcomeImgInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      className="about-us-welcome-section"
      aria-labelledby="welcome-heading"
    >
      <div className="welcome-section-contents">
        <article
          ref={welcomeTextAreaRef}
          className={`welcome-section-text ${handleAnimation(
            welcomeTextInView
          )}`}
        >
          <p className="welcome-introductory-title std-paragraph std-subtitle-fs mi-auto">
            about us
          </p>
          <h1
            className="welcome-section-text-title std-heading"
            id="welcome-heading"
          >
            Welcome
          </h1>
          <p className="welcome-main-text-paragraph std-paragraph">
            Discover Xan Butik, your go-to destination for men's fashion in
            Sheki, Azerbaijan. With a commitment to affordable prices, loyalty
            programs, and exceptional customer service, we offer a curated
            selection of stylish pieces to elevate your wardrobe. Shop now for
            quality fashion at Xan Butik.
          </p>
        </article>
        <div className="welcome-img-wrapper">
          <img
            ref={welcomeImgRef}
            className={`welcome-section-img ${handleAnimation(
              welcomeImgInView
            )}`}
            src={assets.logo_sheki_bg}
            alt="Xan Butik logo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
