import React from "react";
import "./OurServices.css";
import { ourServices } from "../../assets/assets";
import { useInView } from "react-intersection-observer";

function OurServices() { 

  const {ref: ourServicesTextRef, inView: ourServicesTextInView }= useInView();
  
  return (
    <section className="our-services">
      <div className="our-services-contents">
        <div ref={ourServicesTextRef} className={`our-services-text-container ${ourServicesTextInView ? "animate-in" : ""}`}>
          <p className="our-services-subtitle">What we can offer you</p>
          <h1 className="our-services-title">our services</h1>
          <p className="our-services-introductory-paragraph">Experience a personalized styling consultation with our fashion experts, who will curate signature looks tailored to your individual taste and lifestyle, elevating your wardrobe.</p>
        </div>
        <div className="our-services-container">
            {
                ourServices.map((serviceItem, index) => {

                  const {ref: serviceItemRef, inView: serviceItemInView} = useInView();

                    return (
                        <div ref={serviceItemRef} key={index} className={`service-widget-item ${serviceItemInView ? "animate-in" : ""}`}>
                            <img src={serviceItem.img} alt={serviceItem.name} />
                            <div className="services-item-text-container">
                                <p className="service-name">{serviceItem.name}</p>
                                <p className="service-description">{serviceItem.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default OurServices
