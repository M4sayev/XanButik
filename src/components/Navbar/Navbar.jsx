import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'
import { CiHeart, CiMail } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";

function Navbar() {
    function BtnsContainer() {
        return (
            <>
                <div>
                    <CiHeart className='btns-icon'/>
                </div>
                <div className="shopping-cart-icon">
                    <PiShoppingBagLight className='btns-icon'/>
                    <span className='shopping-cart-item-count'>0</span>
                </div>
                <div class="contact-us-dropdown-container">
                    <span className='mail-phone-icon-container' >
                        <CiMail className='btns-icon'/>
                        <MdLocalPhone className='phone-icon'/>
                    </span>
                    <span className='dropdown-arrow'>
                        <IoIosArrowUp className='dropdown-arrow-icon'/>
                    </span>
                    <div className="dropdown-contact-us">
                        <span>
                            <FiPhone className='dropdown-phone-icon'/>
                        </span>
                        <div>
                            <p>0554584886</p>
                            <p>Xan Butik</p>
                        </div>
                    </div>
                </div>
                <button className='contact-us-btn'>Contact Us</button>
            </>
        )
    }
  return (
    <header>
        <div className='navbar'>
            <img src={assets.logo_no_frame} alt="logo" className='logo'/>
            <nav className='navbar-top-menu'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Store</li>
                </ul>
            </nav>
            <div className='navbar-right-side'> 
                <div className='navbar-right-side-btns top'>
                    <BtnsContainer />
                </div> 
                <div className='hamburger-menu-sidebar-container'>
                    <button className='hamburger-menu' aria-label='toggle'>
                        <span></span>
                    </button>
                    <nav className='sidebar-menu is-active'>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Store</li>
                            <div className='navbar-right-side-btns sidebar-icon-btns'>
                                <BtnsContainer />
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
