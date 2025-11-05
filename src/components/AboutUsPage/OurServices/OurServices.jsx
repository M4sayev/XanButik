import "./OurServices.css";
import { ourServices } from "../../../assets/assets";
import { useInView } from "react-intersection-observer";
import ServiceItem from "./ServiceItem";
import { handleAnimation } from "../../../utils/utils";

function OurServices() {
  const { ref: ourServicesTextRef, inView: ourServicesTextInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="our-services" aria-labelledby="services-heading">
      <div className="our-services-contents">
        <div
          ref={ourServicesTextRef}
          className={`our-services-text-container ${handleAnimation(
            ourServicesTextInView
          )}`}
        >
          <p className="std-paragraph std-subtitle-fs mi-auto">
            What we can offer you
          </p>
          <h1 id="services-heading" className="our-services-title std-heading">
            our services
          </h1>
          <p className="our-services-introductory-paragraph std-paragraph mi-auto">
            Experience a personalized styling consultation with our fashion
            experts, who will curate signature looks tailored to your individual
            taste and lifestyle, elevating your wardrobe.
          </p>
        </div>
        <div className="our-services-container">
          {ourServices.map((serviceItem, index) => {
            return <ServiceItem key={index} {...serviceItem} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
