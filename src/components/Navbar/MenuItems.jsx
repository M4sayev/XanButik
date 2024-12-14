import React from "react"; 
import { Link } from "react-router-dom";

function MenuItems({ setIsHamActive,currentPage}) {

const handleBodyScroll = () => {
    setIsHamActive(false);
    document.body.classList.toggle("body-menu-scroll");
}

return (
    <>
    <li role="none">
        <Link
        to="/"
        role="menuitem"
        tabIndex="1"
        className={`${currentPage === "Home" ? "active" : ""} link`}
        onClick={() => handleBodyScroll()}
        >
        Home
        </Link>
    </li>
    <li role="none">
        <Link
        to="/About"
        role="menuitem"
        tabIndex="2"
        className={`${
            currentPage === "About Us" ? "active" : ""
        } link`}
        onClick={() => handleBodyScroll()}
        >
        About Us
        </Link>
    </li>
    <li role="none">
        <Link
        to="/ContactUs"
        role="menuitem"
        tabIndex="3"
        className={`${
            currentPage === "Contact Us" ? "active" : ""
        } link`}
        onClick={() => handleBodyScroll()}
        >
        Contact Us
        </Link>
    </li>
    <li role="none">
        <Link
        to="/Cart"
        role="menuitem"
        tabIndex="4"
        className={`${
            currentPage === "Store" ? "active" : ""
        } link`}
        onClick={() => handleBodyScroll()}
        >
        Store
        </Link>
    </li>
    </>
)
}

export default MenuItems;