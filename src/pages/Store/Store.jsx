import React, { useEffect, useState } from 'react'
import "./Store.css"
import HeaderStore from '../../components/StorePage/HeaderStore/HeaderStore'
import FilterComponent from '../../components/StorePage/filterComponent/FilterComponent'
import Product from '../../components/StorePage/Products/Product'
import {itemsList} from '../../assets/itemsList.js';
import Pagination from '../../components/StorePage/Pagination/Pagination.jsx'

const ITEMS_PER_PAGE = 6;

function Store() {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ filteredProducts, setFilteredProducts ] = useState(itemsList);
  const [ totalPages, setTotalPages ] = useState(Math.ceil(itemsList.length / ITEMS_PER_PAGE));
  const [ paginatedProducts, setPaginatedProducts ] = useState([]);

  useEffect(() => {
    let filtered = [...itemsList];

    if (searchQuery) {
      const trimmedQuery = searchQuery.trim().toLowerCase();
      filtered = itemsList.filter(item => item.name.toLowerCase().includes(trimmedQuery));
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);

  }, [searchQuery]);

  useEffect(() => {
    const total = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    setTotalPages(total);

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginated = filteredProducts.slice(start, start + ITEMS_PER_PAGE);
    setPaginatedProducts(paginated);
  }, [currentPage, filteredProducts]);


  function goToPage(page) {
      if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
      }
  }


  return (
    <main>
      <HeaderStore setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <section className='str-products-grid'>
        {
          paginatedProducts.map((product, index) => {
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
