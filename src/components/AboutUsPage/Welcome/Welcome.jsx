import React, { useContext } from "react";
import "./Welcome.css";
import { assets } from "../../../assets/assets";
import { useInView } from "react-intersection-observer";
import { StoreContext } from "../../../context/StoreContext";

function Welcome() {
  const { ref: welcomeTextAreaRef, inView: welcomeTextInView } = useInView();
  const { ref: welcomeImgRef, inView: welcomeImgInView } = useInView();
  const {handleAnimation} = useContext(StoreContext);

  return (
    <section className="about-us-welcome-section">
      <div className="welcome-section-contents">
        <article
          ref={welcomeTextAreaRef}
          className={`welcome-section-text ${handleAnimation(welcomeTextInView)}`}
        >
          <p className="welcome-introductory-title std-paragraph std-subtitle-fs mi-auto">about us</p>
          <h1 className="welcome-section-text-title std-heading">Welcome</h1>
          <p className="welcome-main-text-paragraph std-paragraph">
            Discover Xan Butik, your go-to destination for men's fashion in
            Sheki, Azerbaijan. With a commitment to affordable prices, loyalty
            programs, and exceptional customer service, we offer a curated
            selection of stylish pieces to elevate your wardrobe. Shop now for
            quality fashion at Xan Butik.
          </p>
        </article>
        <img
          ref={welcomeImgRef}
          className={`welcome-section-img ${handleAnimation(welcomeImgInView)}`}
          src={assets.logo_sheki_bg}
          alt="logo xan butik"
        />
      </div>
    </section>
  );
}

export default Welcome;
