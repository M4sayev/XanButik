import { useInView } from "react-intersection-observer";
import { handleAnimation } from "../../../utils/utils";

function OurClientItem({ brandName, src }) {
  const { ref: clientItemRef, inView: clientItemInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <li
      ref={clientItemRef}
      className={`client-item-container ${handleAnimation(clientItemInView)}`}
      aria-label={`Logo of ${brandName}`}
    >
      <img src={src} aria-hidden="true" />
    </li>
  );
}

export default OurClientItem;
