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
      <button className="icon-btn" aria-label="wishlist">
        <CiHeart aria-label="wishlist" className="btns-icon" />
      </button>
      <button className="icon-btn shopping-cart-icon">
        <PiShoppingBagLight
          aria-label="shopping bag"
          className="btns-icon"
        />
        <span
          aria-live="polite"
          className="shopping-cart-item-count"
        >
          0
        </span>
      </button>
      <div className="contact-us-dropdown-container">
        <span
          aria-label="contacts"
          aria-haspopup="true"
          className="mail-phone-icon-container"
          tabIndex={0}
        >
          <CiMail className="btns-icon" />
          <MdLocalPhone className="phone-icon" />
        </span>
        <span className="dropdown-arrow">
          <IoIosArrowUp 
            aria-label="Arrow up" 
            aria-hidden="true"
            className="dropdown-arrow-icon"
          />
        </span>
        <div role="dropdown" className="dropdown-contact-us">
          <span>
            <FiPhone 
              aria-label="Phone icon" 
              aria-hidden="true"
              className="dropdown-phone-icon" 
            />
          </span>
          <div>
            <p>0554584886</p>
            <p>Xan Butik</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowLogin(true)}
        className="std-button sign-up-btn"
        aria-label="Sign up"
      >
        Sign up
      </button>
    </>
  );
}

export default BtnsContainer;
