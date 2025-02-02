import React, { useContext } from "react";
import "./OurResultsBanner.css";
import { useInView } from "react-intersection-observer";
import { ourResults } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";

function OurResultsBanner() {

  const {ref: ourResultsRef, inView: resultsInView} = useInView();
  const {handleAnimation} = useContext(StoreContext);
  
  return (
    <section className="our-results-banner">
      <article className="our-results-banner-content">
        <h1 className="our-results-banner-content-title std-heading">Our results</h1>
        <div className="results-widgets-line-row">
          <div ref={ourResultsRef} className={`results-widgets-container ${handleAnimation(resultsInView)}`}>
            {
              ourResults.map((item, index) => {
                return (
                  <article key={index}>
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
