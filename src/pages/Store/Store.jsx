import React, { useEffect, useMemo, useState } from 'react'
import "./Store.css"
import HeaderStore from '../../components/StorePage/HeaderStore/HeaderStore'
import FilterComponent from '../../components/StorePage/filterComponent/FilterComponent'
import Product from '../../components/StorePage/Products/Product'
import {itemsList} from '../../assets/itemsList.js';
import Pagination from '../../components/StorePage/Pagination/Pagination.jsx'

const ITEMS_PER_PAGE = 8;

function Store() {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return itemsList.filter(item =>
      item.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  }, [filteredProducts]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredProducts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);


  function goToPage(page) {
      if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
      }
  }


  return (
    <main>
      <HeaderStore setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      {
      filteredProducts.length === 0 
      ? 
      <section 
        className='no-results-container' 
        role="status" 
        aria-live="polite"
      >
        <div className='no-results-text'>
          <h1>No Results</h1>
          <p>We couldn't find anything matching "<strong>{searchQuery}</strong>"</p>
        </div>
      </section>
      : 
      <section className='str-products-grid'>
        {
          
          paginatedProducts.map((product, index) => {
            return <Product 
                    key={product.id} 
                    {...product} 
                    index={index} 
                    searchQuery={searchQuery}
                  />
          })
        }
      </section>
      }
      <Pagination 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </main>
  )
}

export default Store
