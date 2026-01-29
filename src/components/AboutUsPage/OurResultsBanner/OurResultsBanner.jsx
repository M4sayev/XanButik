import "./OurResultsBanner.css";
import { useInView } from "react-intersection-observer";
import { ourResults } from "../../../assets/assets";
import { handleAnimation } from "../../../utils/utils";
import ClientSideCountUp from "./ClientSideCountUp";

function OurResultsBanner() {
  const { ref: ourResultsRef, inView: resultsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      className="our-results-banner"
      aria-labelledby="our-results-heading"
      role="region"
    >
      <article className="our-results-banner-content">
        <h2
          id="our-results-heading"
          className="our-results-banner-content-title std-heading"
        >
          Our results
        </h2>
        <div className="results-widgets-line-row">
          <div
            ref={ourResultsRef}
            className={`results-widgets-container ${handleAnimation(
              resultsInView,
            )}`}
            role="list"
            aria-label="List of key achievements and results"
          >
            {ourResults.map((item, index) => {
              const { achievement, result, suffix } = item;
              return (
                <article
                  key={index}
                  role="listitem"
                  aria-label={`Achievement: ${achievement}, Result: ${result}`}
                >
                  {resultsInView ? (
                    <ClientSideCountUp end={achievement} suffix={suffix} />
                  ) : (
                    "0"
                  )}
                  <p>{result}</p>
                </article>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}

export default OurResultsBanner;
