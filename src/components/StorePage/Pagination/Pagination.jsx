import React, { useEffect, useState } from 'react';
import "./Pagination.css";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Pagination({totalPages, currentPage, goToPage }) {

    const [ maxLength, setMaxLength ] = useState(window.innerWidth < 777 ? 5 : 7);
    
    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            setMaxLength(width < 777 ? 5 : 7);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function getPagination(currentPage, totalPages, maxLength = 7) {

        const sideWidth = maxLength < 9 ? 1 : 2; 
        const available = maxLength - sideWidth * 2 - 3; 
        const leftWidth = Math.floor(available / 2); 
        const rightWidth = available - leftWidth; 

        function range(start, end) {
            if (start === end) return [start];
            return Array.from({ length: end - start + 1 }, (_, i) => i + start);
        }

        if (totalPages <= maxLength) {
            return range(1, totalPages);
        }

        if (currentPage <= maxLength - sideWidth - 1 - rightWidth) {
            return [
                ...range(1, maxLength - sideWidth - 1),
                "...",
                ...range(totalPages - sideWidth  + 1, totalPages)
            ]
        }

        if (currentPage >= totalPages - sideWidth - 1 - leftWidth) {
            return [
                ...range(1, sideWidth),
                "...",
                ...range(totalPages - sideWidth - 1 - leftWidth - rightWidth, totalPages)
            ]
        }

        return [
            ...range(1, sideWidth),
            "...",
            ...range(currentPage - leftWidth, currentPage + rightWidth),
            "...",
            ...range(totalPages - sideWidth + 1, totalPages)
        ]
    }

    if (totalPages < 2) return null;

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
                getPagination(currentPage, totalPages, maxLength).map((num, index) => {
                return (
                    <li key={index}>
                        <button 
                            className={`std-button pagination-btn ${num === currentPage ? "pagination--active" : ""}`}
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
