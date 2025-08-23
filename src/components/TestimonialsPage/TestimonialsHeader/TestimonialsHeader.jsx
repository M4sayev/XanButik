import React, { useContext } from 'react'
import './TestimonialsHeader.css'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'
import { ourResults } from '../../../assets/assets'
import { useInView } from 'react-intersection-observer'
import { StoreContext } from '../../../context/StoreContext'

function TestimonialsHeader() {
  const {ref: testHeaderRef, inView: testHeaderInView} = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const {handleAnimation} = useContext(StoreContext);
  return (
    <header 
      ref={testHeaderRef} 
      className={`testimonials-header ${testHeaderInView ? "testimonials-header-animate-in" : ""}`}
      aria-labelledby='our-results-heading'
    >
      <div className="testimonials-contents">
        <div className="testimonials-text-container">
            <h1 id="our-results-heading" className="std-heading">Our results</h1>
            <p className="std-paragraph mi-auto">We're proud of what we've achieved, but we're not stopping there.</p>
        </div>
        <div className="testimonials-widgets-container">
          <div className="testimonials-img-widget-container"></div>
          <div className="testimonials-results-container" role='list'>
              {
                ourResults.map((item, index) => {
                  const {ref: resultRef, inView: resultInView} = useInView()
                  return (
                    <article 
                      ref={resultRef} 
                      key={index} 
                      className={`result-widget ${handleAnimation(resultInView)}`}
                      role="listitem"
                      aria-label={`Achievement: ${item.achievement}, Result: ${item.result}`}
                    >
                      <h1 className="result-widget-heading std-heading">{item.achievement}</h1>
                      <p className="result-widget-name">{item.result}</p>
                    </article>
                  );
                })
              }
          </div>
        </div>
        <Button 
          as={Link} 
          id="Explore" 
          to="/Cart" 
          className="testimonials-learn-more-btn std-button"
          aria-label="Explore our achievements"
        >Explore</Button>
      </div>
    </header>
  )
}

export default TestimonialsHeader
