import React, { useState, createContext, useEffect } from "react";

export const StoreContext = createContext(null); 

function StoreContextProvider(props) {
    const [ showLogin, setShowLogin ] = useState(false);
    const [currentPage, setCurrentPage] = useState(() => {
        if (!localStorage.getItem("menu")) return "Home";
        return localStorage.getItem("menu");
    });

    useEffect(() => {
        localStorage.setItem("menu", currentPage);
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
