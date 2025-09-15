import React from "react";
import { GiCheckMark } from "react-icons/gi";

function MobileFilterButton({setSideFilterMenuOpen}) {
  return <div className='filter-container'>
            <button className='filter-btn' onClick={() => setSideFilterMenuOpen(true)}>
                Filter
                <GiCheckMark 
                    aria-hidden="true" 
                    style={{
                        marginLeft: "3px",
                        width: "13px",
                        height: "13px"
                    }} />
            </button>
        </div>;
}

export default MobileFilterButton;
  