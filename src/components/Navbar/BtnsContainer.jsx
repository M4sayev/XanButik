import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { CiHeart, CiMail } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";
import { MdLocalPhone } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { FiPhone } from "react-icons/fi";

function BtnsContainer() {
  const { setShowLogin } = useContext(StoreContext);

  return (
    <>
      <div>
        <CiHeart tabIndex="5" aria-label="wishlist" className="btns-icon" />
      </div>
      <div className="shopping-cart-icon">
        <PiShoppingBagLight
          tabIndex="6"
          aria-label="shopping bag"
          className="btns-icon"
        />
        <span
          aria-valuenow="0"
          aria-valuemin="0"
          className="shopping-cart-item-count"
        >
          0
        </span>
      </div>
      <div className="contact-us-dropdown-container">
        <span
          tabIndex="7"
          aria-label="contacts"
          className="mail-phone-icon-container"
        >
          <CiMail className="btns-icon" />
          <MdLocalPhone className="phone-icon" />
        </span>
        <span className="dropdown-arrow">
          <IoIosArrowUp aria-label="arrow up" className="dropdown-arrow-icon" />
        </span>
        <div role="dropdown" className="dropdown-contact-us">
          <span>
            <FiPhone aria-label="phone" className="dropdown-phone-icon" />
          </span>
          <div>
            <p>0554584886</p>
            <p>Xan Butik</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowLogin(true)}
        className="sign-up-btn"
        tabIndex="8"
      >
        sing up
      </button>
    </>
  );
}

export default BtnsContainer;
