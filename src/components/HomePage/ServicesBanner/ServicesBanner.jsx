import React from "react";
import "./ServicesBanner.css";
import { assets } from "../../../assets/assets";
import { useInView } from "react-intersection-observer";
import { handleAnimation } from "../../../utils/utils";

function ServicesBanner() {

    const {ref: servicesRef, inView: servicesInView} = useInView({
      threshold: 0.2,
      triggerOnce: true
    });

    const services = [
      { icon: assets.services_icon_one, alt: "T-shirt icon representing styling consultation", label: "personal styling consultation" },
      { icon: assets.services_icon_two, alt: "Suit icon representing tailoring services", label: "tailoring and alterations" },
      { icon: assets.services_icon_three, alt: "Pants icon representing premium fittings"
, label: "premium suit fittings" },
      { icon: assets.services_icon_four, alt: "Tie icon representing shoe care and repair", label: "shoe care and repair" }
    ];
    
  return (
    <section className="services-banner" role="region" aria-label="Services Offered">
    <div ref={servicesRef} className={`services-container ${handleAnimation(servicesInView)}`}>
      {services.map((service, index) => (
        <article key={index}>
          <img src={service.icon} alt={service.alt} />
          <p>{service.label}</p>
        </article>
      ))}
    </div>
  </section>
  );
}

export default ServicesBanner;
