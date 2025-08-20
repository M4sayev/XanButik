import React from "react";
import { Link } from "react-router-dom";

function MenuItems({ isHamActive, setIsHamActive, currentPage }) {
  const handleBodyScroll = () => {
    if (!isHamActive) return;
    setIsHamActive(false);
    document.body.classList.remove("body-menu-scroll");
  };

  const items = [
    { label: "Home", path: "/"},
    { label: "About Us", path: "/About"},
    { label: "Contact Us", path: "/ContactUs" },
    { label: "Store", path: "/Store" },
  ];

  return items.map(({label, path}) => (
    <li key={label} role="none">
      <Link 
        to={path}
        role="menuitem"
        className={`link ${currentPage === label ? "active" : ""}`}
        onClick={handleBodyScroll}
      >
        {label}
      </Link>
    </li>
  ));
}

export default MenuItems;
