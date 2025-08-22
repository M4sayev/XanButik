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

    const routePageMap = {
        "/": "Home",
        "/About": "About Us",
        "/Testimonials": "About Us",
        "/ContactUs": "Contact Us",
        "/Store": "Store"
    };

    useEffect(() => {
        const page = routePageMap[location.pathname] || "Other";
        setCurrentPage(page);
    }, [location]); 

    useEffect(() => {
        sessionStorage.setItem("menu", currentPage);
    }, [currentPage]);

    function handleAnimation(inView) {
        return inView ? "animate-in" : "";
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
