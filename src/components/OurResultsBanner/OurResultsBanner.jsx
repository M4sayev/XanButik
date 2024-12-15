import React from "react";
import "./OurResultsBanner.css";
import { useInView } from "react-intersection-observer";

function OurResultsBanner() {

  const {ref: ourResultsRef, inView: resultsInView} = useInView();
  return (
    <section className="our-results-banner">
      <article ref={ourResultsRef} className={`our-results-banner-content ${resultsInView ? "animate-in" : ""}`}>
        <h1 className="our-results-banner-content-title">Our results</h1>
        <div className="results-widgets-line-row">
          <div className="results-widgets-container">
            <article>
              <h2>5</h2>
              <p>years of experience</p>
            </article>
            <article>
              <h2>100%</h2>
              <p>happy clients</p>
            </article>
            <article>
              <h2>50+</h2>
              <p>events hosted</p>
            </article>
            <article>
              <h2>230</h2>
              <p>projects completed</p>
            </article>
          </div>
        </div>
      </article>
    </section>
  )
}

export default OurResultsBanner
