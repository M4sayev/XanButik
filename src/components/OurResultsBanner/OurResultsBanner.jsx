import React from "react";
import "./OurResultsBanner.css";
import { useInView } from "react-intersection-observer";
import { ourResults } from "../../assets/assets";

function OurResultsBanner() {

  const {ref: ourResultsRef, inView: resultsInView} = useInView();
  return (
    <section className="our-results-banner">
      <article ref={ourResultsRef} className={`our-results-banner-content ${resultsInView ? "animate-in" : ""}`}>
        <h1 className="our-results-banner-content-title std-heading">Our results</h1>
        <div className="results-widgets-line-row">
          <div className="results-widgets-container">
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
