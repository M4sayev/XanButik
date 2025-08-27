import React, { useState } from 'react'
import "./Store.css"
import HeaderStore from '../../components/StorePage/HeaderStore/HeaderStore'
import FilterComponent from '../../components/StorePage/filterComponent/FilterComponent'
import Product from '../../components/StorePage/Products/Product'
import {itemsList} from '../../assets/itemsList.js';
import Pagination from '../../components/StorePage/Pagination/Pagination.jsx'

const ITEMS_PER_PAGE = 4;

function Store() {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ products, setProducts ] = useState(itemsList);

  function applyFilters(query) {
    const trimmedQuery = query.trim().toLowerCase();
    const filtered = itemsList.filter(item => item.name.toLowerCase().includes(trimmedQuery));
    setProducts(filtered);
  };

  const [ currentPage, setCurrentPage ] = useState(1);
  const totalPages = Math.ceil(itemsList.length / ITEMS_PER_PAGE);

  function goToPage(page) {
      if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
      }
  }

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const newItems = itemsList.slice(start, start + ITEMS_PER_PAGE);

  return (
    <main>
      <HeaderStore applyFilters={applyFilters} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <section className='str-products-grid'>
        {
          products.map((product, index) => {
            return <Product key={product.id} {...product} index={index}/>
          })
        }
      </section>
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
