import { useInView } from "react-intersection-observer";
import { handleAnimation } from "../../../utils/utils";

function FeaturedItem({ img, name, price, layoutClass }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <article
      tabIndex={0}
      role="group"
      aria-label={`Product: ${name}, price ${price} AZN`}
      className={`${handleAnimation(inView)} ${layoutClass}`}
      ref={ref}
    >
      <img src={img} alt={`Featured item: ${name}`} aria-hidden="true" />
      <span className="price-popup" aria-hidden="true">
        <p className="item-name">{name}</p>
        <p className="item-price-usd">
          {price}
          <span>AZN</span>
        </p>
      </span>
    </article>
  );
}

export default FeaturedItem;
