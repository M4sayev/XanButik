import React, { useEffect } from 'react';
import "./Pagination.css";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Pagination({totalPages, currentPage, setCurrentPage}) {

    const pagArr = Array.from( {length: totalPages}, (_, i) => i + 1);

    function goToPage(page) {
        console.log(page);
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    }

    if (totalPages === 0) return null;

  return (
    <nav aria-label='Pagination' role="navigation">
        <ul className='pagination'>
            <li>
                <button 
                    className='std-button pagination-btn-prev'
                    aria-label="Previous page"
                    disabled={currentPage === 1}
                    onClick={() => goToPage(currentPage - 1)}
                >
                    <MdOutlineKeyboardArrowLeft/>
                </button>
            </li>
            {
                pagArr.map((num) => {
                return (
                    <li key={num}>
                        <button 
                            className={`std-button pagination-btn ${num === currentPage ? "active" : ""}`}
                            aria-label={`Page ${num}`}
                            aria-current={num === currentPage ? "page" : undefined}
                            onClick={() => {
                                goToPage(num)
                            }}
                        >
                            {num}
                        </button>
                    </li>
                )
                })  
            }
            <li>
                <button 
                    className='std-button pagination-btn-next'
                    aria-label="Next page"
                    disabled={currentPage === totalPages}
                    onClick={() => goToPage(currentPage + 1)}
                >
                    <MdOutlineKeyboardArrowRight/>
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination
