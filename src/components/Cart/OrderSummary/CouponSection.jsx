function CouponSection({
  handleRemoveCurrentCoupon,
  couponInfo,
  formatCouponSummary,
}) {
  return (
    <div
      className="summary-item"
      style={couponInfo === null ? { display: "none" } : {}}
    >
      <p>
        Coupon Applied
        <button
          type="button"
          className="remove-coupon-btn"
          aria-label="Remove the current coupon"
          onClick={handleRemoveCurrentCoupon}
        >
          [remove]
        </button>
      </p>
      <span>{formatCouponSummary(couponInfo?.text, couponInfo?.newValue)}</span>
    </div>
  );
}

export default CouponSection;
