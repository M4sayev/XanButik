import React from 'react'
import './TestimonialsHeader.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { ourResults } from '../../assets/assets'
import { useInView } from 'react-intersection-observer'

function TestimonialsHeader() {
  const {ref: testHeaderRef, inView: testHeaderInView} = useInView();
  return (
    <header ref={testHeaderRef} className={`testimonials-header ${testHeaderInView ? "testimonials-header-animate-in" : ""}`}>
      <div className="testimonials-contents">
        <div className="testimonials-text-container">
            <h1 className="header-title">Our results</h1>
            <p className="header-description">We're proud of what we've achieved by we're not stopping there.</p>
        </div>
        <div className="testimonials-widgets-container">
          <div className="testimonials-img-widget-container"></div>
          <div className="testimonials-results-container">
              {
                ourResults.map((item, index) => {
                  const {ref: resultRef, inView: resultInView} = useInView()
                  return (
                    <div ref={resultRef} key={index} className={`result-widget ${resultInView ? "animate-in" : ""}`}>
                      <h1 className="result-widget-heading">{item.achievement}</h1>
                      <p className="result-widget-name">{item.result}</p>
                    </div>
                  );
                })
              }
          </div>
        </div>
        <Button as={Link} id="Explore" to="/Cart" className="testimonials-learn-more-btn button">Explore</Button>
      </div>
    </header>
  )
}

export default TestimonialsHeader
