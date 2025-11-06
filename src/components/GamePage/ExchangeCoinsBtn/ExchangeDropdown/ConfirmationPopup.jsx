import { useContext } from "react";
import "./ConfirmationPopup.css";
import { GameContext } from "../../../../context/GameContext";
import { defaultCoupons } from "../../../../assets/game/gameAssets";
import { toast } from "react-toastify";

function ConfirmationPopup({ confiramtionPopupRef, setBoughtCoupons }) {
  const { setIsConfirmationOpen, setBalance, couponSelected, setCoupons } =
    useContext(GameContext);
  const handleBuyCoupon = () => {
    setBalance((prevBalance) => {
      const { price } = defaultCoupons.find(
        (coupon) => coupon.id === couponSelected
      );
      const newBalance = {
        ...prevBalance,
        [price.coinValue]: prevBalance[price.coinValue] - price.value,
      };
      localStorage.setItem("balance", JSON.stringify(newBalance));
      return newBalance;
    });

    // add a new coupon
    addCoupon(couponSelected);

    const notify = () => toast.success("Coupon successfully bought");
    notify();
    setIsConfirmationOpen(false);
  };

  function addCoupon(id) {
    setCoupons((prevCoupons) => prevCoupons.filter((c) => c !== id));

    setBoughtCoupons((prevCoupons) => {
      const exists = prevCoupons.some((c) => c.id == id);
      let updatedCoupons;

      if (exists) {
        updatedCoupons = prevCoupons.map((coupon) =>
          coupon.id == id
            ? { ...coupon, count: coupon.count + 1, date: Date.now() }
            : coupon
        );
      } else {
        const newCoupon = defaultCoupons.find((coupon) => coupon.id == id);
        if (!newCoupon) return prevCoupons;
        updatedCoupons = [
          ...prevCoupons,
          { ...newCoupon, count: 1, date: Date.now() },
        ];
      }
      localStorage.setItem("boughtCoupons", JSON.stringify(updatedCoupons));
      return updatedCoupons;
    });
  }

  return (
    <div
      ref={confiramtionPopupRef}
      className="confirmation-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-popup-heading"
      aria-describedby="confirmation-popup-description"
    >
      <div className="confirmation-popup-contents">
        <h2
          className="confimartion-popup-heading"
          id="confirmation-popup-heading"
        >
          Are you sure?
        </h2>

        <p id="confirmation-popup-description" className="std-paragraph">
          You won&apos;t be able to get your coins back after this
        </p>
        <div className="confimation-popup-btns-container">
          <button className="std-hud-btn yes-btn" onClick={handleBuyCoupon}>
            YES
          </button>
          <button
            className="std-hud-btn no-btn"
            onClick={() => setIsConfirmationOpen(false)}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
