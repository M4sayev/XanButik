import React, { useEffect, useMemo, useState } from 'react'
import "./Store.css"
import HeaderStore from '../../components/StorePage/HeaderStore/HeaderStore'
import FilterComponent from '../../components/StorePage/filterComponent/FilterComponent'
import Product from '../../components/StorePage/Products/Product'
import {itemsList} from '../../assets/itemsList.js';
import Pagination from '../../components/StorePage/Pagination/Pagination.jsx'
import CategoryButtons from '../../components/StorePage/CategoryButtons/CategoryButtons.jsx'

const ITEMS_PER_PAGE = 8;

function Store() {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);

  const [ currentCategory, setCurrentCategory ] = useState("All");
  const [ products, setProducts ] = useState(itemsList);

  // Create categoryMap
  const categoryMap = itemsList.reduce((map, product) => {
      if (!map[product.category]) {
          map[product.category] = [];
      }
      map[product.category].push(product);
      return map;
  }, {"All": itemsList});

  useEffect(() => {
    const category = categoryMap[currentCategory];
    setProducts(category);
    setSearchQuery("")
    setCurrentPage(1);
  }, [currentCategory]);

  // Filter products by search bar input
  const filteredProducts = useMemo(() => {
    
    const query = searchQuery.trim().toLowerCase();
    return products.filter(item =>
      item.name.toLowerCase().includes(query)
    );
  }, [searchQuery, products]);

  // Count total pages for the pagination
  const totalPages = useMemo(() => {
    return Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  }, [filteredProducts]);

  // Create an array of page products for paginations
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

  // Handle select category
  function handleCategoryBtn(category) {
    if (category === currentCategory) {
      setCurrentCategory("All");
    } else {
      setCurrentCategory(category);
    }
  }

  return (
    <main>
      <HeaderStore setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <CategoryButtons 
        categoryMap={categoryMap} 
        handleCategoryBtn={handleCategoryBtn}
        currentCategory={currentCategory}
      />
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
