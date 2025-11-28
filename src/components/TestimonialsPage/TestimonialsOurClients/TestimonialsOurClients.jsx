import "./TestimonialsOurClients.css";
import { ourBrandCompanies } from "../../../assets/assets";
import { useInView } from "react-intersection-observer";
import { handleAnimation } from "../../../utils/utils";
import OurClientItem from "./OurClientItem";

function TestimonialsOurClients() {
  const { ref: tOurClientsTextRef, inView: tOurClientsTexInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      className="testimonials-our-clients"
      aria-labelledby="our-clients-heading"
      role="region"
    >
      <div className="t-our-client-contents">
        <section
          ref={tOurClientsTextRef}
          className={`t-our-clients-text-container ${handleAnimation(
            tOurClientsTexInView
          )}`}
        >
          <h2 id="our-clients-heading" className="std-heading">
            Our clients
          </h2>
          <p className="std-paragraph mi-auto">
            Welcome to our clients section - the perfect place for
            fashionably-minded men everywhere! Here you can explore an array of
            stylish clothes that will update your wardrobe. Whether you&apos;re
            looking for a classic staple or something trendier, there&apos;s
            something here just for you.
          </p>
        </section>
        <ul className="t-our-results-grid" role="list">
          {ourBrandCompanies.map((clientItem) => {
            const { img, brandName, id } = clientItem;
            return <OurClientItem key={id} src={img} brandName={brandName} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default TestimonialsOurClients;
