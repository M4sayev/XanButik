import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext.jsx";
import BtnsContainer from "./BtnsContainer.jsx";
import MenuItems from "./MenuItems.jsx";

function Navbar() {
  const [isHamActive, setIsHamActive] = useState(false);
  const { currentPage, setCurrentPage } = useContext(StoreContext);

  function handlePage(page) {
    if (page.tagName !== "A") return;
    if (currentPage !== page.innerHTML) setCurrentPage(page.innerHTML);
  }

  return (
    <div className="navigation">
      <div className="navbar">
        <img
          onClick={() => window.location.reload(false)}
          src={assets.logo_no_frame}
          alt="logo"
          className="logo"
        />
        <nav className="navbar-top-menu">
          <ul role="menu" onClick={(e) => handlePage(e.target)}>
            <MenuItems
              isHamActive={isHamActive}
              setIsHamActive={setIsHamActive}
              currentPage={currentPage}
            />
          </ul>
        </nav>
        <div className="navbar-right-side">
          <div className="navbar-right-side-btns top">
            <BtnsContainer />
          </div>
          <div className="hamburger-menu-sidebar-container">
            <button
              tabIndex="8"
              className={`hamburger-menu ${isHamActive ? "is-active" : ""}`}
              aria-label="toggle"
              aria-haspopup="menu"
              aria-expanded={isHamActive ? "true" : "false"}
              onClick={() => {
                setIsHamActive(!isHamActive);
                document.body.classList.toggle("body-menu-scroll");
              }}
            >
              <span></span>
            </button>
            <nav
              className={`sidebar-menu ${isHamActive ? "is-active" : ""}`}
            >
              <ul role="menu" onClick={(e) => handlePage(e.target)}>
                <MenuItems
                  isHamActive={isHamActive}
                  setIsHamActive={setIsHamActive}
                  currentPage={currentPage}
                />
              </ul>
              <div className="navbar-right-side-btns sidebar-icon-btns">
                <BtnsContainer />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
