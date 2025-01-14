import React, { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const StoreContext = createContext(null); 

function StoreContextProvider(props) {
    const [ showLogin, setShowLogin ] = useState(false);
    const [currentPage, setCurrentPage] = useState(() => {
        if (!sessionStorage.getItem("menu")) return "Home";
        return sessionStorage.getItem("menu");
    });
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") setCurrentPage("Home");
        else if (location.pathname === "/About" || location.pathname === "/Testimonials") setCurrentPage("About Us")
        else if (location.pathname === "/ContactUs") setCurrentPage("Contact Us");
        else if (location.pathname === "/Store") setCurrentPage("Store");
    }, [location]); 

    useEffect(() => {
        sessionStorage.setItem("menu", currentPage);
    }, [currentPage]);

    function handleAnimation(inView) {
        if (!inView) return "";
        return "animate-in";
    }

    const contextValue = {
        currentPage,
        setCurrentPage,
        showLogin,
        setShowLogin,
        handleAnimation
    };

  return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
