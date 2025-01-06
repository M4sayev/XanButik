import React, { useContext } from "react";
import "./OurServices.css";
import { ourServices } from "../../../assets/assets";
import { useInView } from "react-intersection-observer";
import { StoreContext } from "../../../context/StoreContext";

function OurServices() { 

  const {ref: ourServicesTextRef, inView: ourServicesTextInView }= useInView();
  const {handleAnimation} = useContext(StoreContext);
  
  return (
    <section className="our-services">
      <div className="our-services-contents">
        <div ref={ourServicesTextRef} className={`our-services-text-container ${handleAnimation(ourServicesTextInView)}`}>
          <p className="std-paragraph std-subtitle-fs mi-auto">What we can offer you</p>
          <h1 className="our-services-title std-heading">our services</h1>
          <p className="our-services-introductory-paragraph std-paragraph mi-auto">Experience a personalized styling consultation with our fashion experts, who will curate signature looks tailored to your individual taste and lifestyle, elevating your wardrobe.</p>
        </div>
        <div className="our-services-container">
            {
                ourServices.map((serviceItem, index) => {

                  const {ref: serviceItemRef, inView: serviceItemInView} = useInView();

                    return (
                        <div ref={serviceItemRef} key={index} className={`service-widget-item ${handleAnimation(serviceItemInView)}`}>
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
