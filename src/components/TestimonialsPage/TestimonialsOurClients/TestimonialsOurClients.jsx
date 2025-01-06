import React, { useContext } from 'react';
import './TestimonialsOurClients.css';
import { ourBrandCompanies } from '../../../assets/assets';
import { useInView } from 'react-intersection-observer';
import { StoreContext } from '../../../context/StoreContext';

function TestimonialsOurClients() {
    const {ref: tOurClientsTextRef, inView: tOurClientsTexInView} = useInView();
    const { handleAnimation } = useContext(StoreContext);
  return (
    <section className="testimonials-our-clients">
        <div className="t-our-client-contents"> 
            <div ref={tOurClientsTextRef} className={`t-our-clients-text-container ${handleAnimation(tOurClientsTexInView)}`}>
                <h1 className="std-heading">Our clients</h1>
                <p className="std-paragraph mi-auto">Welcome to our clients section - the perfect place for fashionably-minded men everywhere! Here you can explore an array of stylish clothes that will update your wardrobe. Whether you're looking for a classic staple or something trendier, there's something here just for you.</p>
            </div>
            <div className="t-our-results-grid">
                {
                    ourBrandCompanies.map((clientItem, index) => {
                        const {ref: clientItemRef, inView: clientItemInView} = useInView();
                        const {img, brandName} = clientItem;
                        return (
                            <div ref={clientItemRef} key={index} className={`client-item-container ${handleAnimation(clientItemInView)}`}>
                                <img src={img} alt={brandName} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default TestimonialsOurClients
