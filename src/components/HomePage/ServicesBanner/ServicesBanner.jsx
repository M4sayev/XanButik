import React, { useContext } from "react";
import "./ServicesBanner.css";
import { assets } from "../../../assets/assets";
import { useInView } from "react-intersection-observer";
import {StoreContext} from "../../../context/StoreContext";

function ServicesBanner() {

    const {ref: servicesRef, inView: servicesInView} = useInView();
    const {handleAnimation} = useContext(StoreContext);
    
  return (
    <section className="services-banner">
      <div ref={servicesRef} className={`services-container ${handleAnimation(servicesInView)}`}>
        <div>
          <img src={assets.services_icon_one} alt="tshirt" />
          <p>personal styling consultation</p>
        </div>
        <div>
          <img src={assets.services_icon_two} alt="suit" />
          <p>tailoring and alterations</p>
        </div>
        <div>
          <img src={assets.services_icon_three} alt="pants" />
          <p>premium suit fittings</p>
        </div>
        <div>
          <img src={assets.services_icon_four} alt="tie" />
          <p>shoe care and repair</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesBanner;
