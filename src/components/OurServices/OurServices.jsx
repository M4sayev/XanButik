import React from "react";
import "./OurServices.css";
import { ourServices } from "../../assets/assets";

function OurServices() {
  return (
    <section className="our-services">
      <div className="our-services-contents">
        <p className="our-services-subtitle">What we can offer you</p>
        <h1 className="our-services-title">our services</h1>
        <p className="our-services-introductory-paragraph">Experience a personalized styling consultation with our fashion experts, who will curate signature looks tailored to your individual taste and lifestyle, elevating your wardrobe.</p>
        <div className="our-services-container">
            {
                ourServices.map((serviceItem, index) => {

                    return (
                        <div key={index} className="service-widget-item">
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
