import React, { useState, createContext, useEffect } from "react";

export const StoreContext = createContext(null); 

function StoreContextProvider(props) {
    const [ showLogin, setShowLogin ] = useState(false);
    const [currentPage, setCurrentPage] = useState(() => {
        if (!sessionStorage.getItem("menu")) return "Home";
        return sessionStorage.getItem("menu");
    });

    useEffect(() => {
        sessionStorage.setItem("menu", currentPage);
    }, [currentPage]);

    const contextValue = {
        currentPage,
        setCurrentPage,
        showLogin,
        setShowLogin
    };

  return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
