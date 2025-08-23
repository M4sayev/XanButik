import React, { useContext } from "react";
import "./OurResultsBanner.css";
import { useInView } from "react-intersection-observer";
import { ourResults } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";

function OurResultsBanner() {

  const {ref: ourResultsRef, inView: resultsInView} = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const {handleAnimation} = useContext(StoreContext);
  
  return (
    <section 
      className="our-results-banner"
      aria-labelledby="our-results-heading"
      role="region"
    >
      <article className="our-results-banner-content">
        <h1 id="our-results-heading" className="our-results-banner-content-title std-heading">Our results</h1>
        <div className="results-widgets-line-row">
          <div 
            ref={ourResultsRef} 
            className={`results-widgets-container ${handleAnimation(resultsInView)}`}
            role="list"
            aria-label="List of key achievements and results"
          >
            {
              ourResults.map((item, index) => {
                return (
                  <article 
                    key={index} 
                    role="listitem"
                    aria-label={`Achievement: ${item.achievement}, Result: ${item.result}`}
                  >
                    <h2>{item.achievement}</h2>
                    <p>{item.result}</p>
                  </article> 
                )
              })
            }
          </div>
        </div>
      </article>
    </section>
  )
}

export default OurResultsBanner
