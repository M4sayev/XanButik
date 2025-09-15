import React from 'react';
import './TestimonialsOurClients.css';
import { ourBrandCompanies } from '../../../assets/assets';
import { useInView } from 'react-intersection-observer';
import { handleAnimation } from '../../../utils/utils';

function TestimonialsOurClients() {
    const {ref: tOurClientsTextRef, inView: tOurClientsTexInView} = useInView();
  return (
    <section className="testimonials-our-clients" aria-labelledby='our-clients-heading' role='region'>
        <div className="t-our-client-contents"> 
            <div ref={tOurClientsTextRef} className={`t-our-clients-text-container ${handleAnimation(tOurClientsTexInView)}`}>
                <h1 id='our-clients-heading' className="std-heading">Our clients</h1>
                <p className="std-paragraph mi-auto">Welcome to our clients section - the perfect place for fashionably-minded men everywhere! Here you can explore an array of stylish clothes that will update your wardrobe. Whether you're looking for a classic staple or something trendier, there's something here just for you.</p>
            </div>
            <ul className="t-our-results-grid" role="list">
                {
                    ourBrandCompanies.map((clientItem, index) => {
                        const {ref: clientItemRef, inView: clientItemInView} = useInView();
                        const {img, brandName} = clientItem;
                        return (
                            <div 
                                ref={clientItemRef} 
                                key={index} 
                                className={`client-item-container ${handleAnimation(clientItemInView)}`}
                                aria-label={`Logo of ${brandName}`}
                            >
                                <img src={img} aria-hidden="true"/>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default TestimonialsOurClients
