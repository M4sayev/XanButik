import { useInView } from "react-intersection-observer";
import { handleAnimation } from "../../../utils/utils";

function AddressSection() {
  const { ref: contactRef, inView: contactInView } = useInView();
  return (
    <div
      ref={contactRef}
      className={`contacts-address-info-container ${handleAnimation(
        contactInView
      )}`}
    >
      <h2 id="contacts-heading" className="std-heading info-container-heading">
        Address
      </h2>
      <p className="std-paragraph mi-auto">
        We’re excited to meet you! Feel free to get in touch with us within
        these working hours.
      </p>
      <address>
        <ul aria-label="Contact details" className="contact-widgets-container">
          <li className="contact-widget-item">
            <span className="widget-name">Email</span>
            <a className="widget-info" href="mailto:msayev02@gmail.com">
              msayev02@gmail.com
            </a>
          </li>
          <li className="contact-widget-item">
            <span className="widget-name">Phone</span>
            <a className="widget-info" href="tel:0554584886">
              0554584886
            </a>
          </li>
          <li className="contact-widget-item">
            <span className="widget-name">Address</span>
            <span className="widget-info">Blah Blah Street, 420</span>
          </li>
        </ul>
      </address>
    </div>
  );
}

export default AddressSection;
