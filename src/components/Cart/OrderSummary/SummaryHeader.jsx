import { formatPrice } from "../../../utils/utils";

function OrderSummaryHeader({ subTotalPrice, shippingCost }) {
  return (
    <header>
      <h2 className="order-summary-heading" id="order-summary-heading">
        order Summary
      </h2>
      <div className="summary-item">
        <p>Subtotal</p>
        <span>{formatPrice(subTotalPrice)}</span>
      </div>
      <div className="summary-item">
        <p>Shipping</p>
        <span>{formatPrice(shippingCost)}</span>
      </div>
    </header>
  );
}

export default OrderSummaryHeader;
