import "./SmartBanner.css";
import { useInView } from "react-intersection-observer";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { handleAnimation } from "../../../utils/utils";

function SmartBanner() {
  const { ref: bannerContentsRef, inView: bannerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="smart-banner">
      <div
        ref={bannerContentsRef}
        className={`smart-banner-container ${handleAnimation(bannerInView)}`}
      >
        <article className="smart-banner-text-container">
          <h1 className="smart-banner-cta-title std-heading-cta">
            Don&apos;t miss out on these amazing deals!
          </h1>
          <p className="smart-banner-cta-paragraph std-paragraph">
            We are proud of what we&apos;ve achieved, but we are not stopping
            there.
          </p>
        </article>
        <Button
          id="Explore"
          as={Link}
          to="/Cart"
          className="smart-banner-explore-btn std-button"
        >
          Explore
        </Button>
      </div>
    </section>
  );
}

export default SmartBanner;
