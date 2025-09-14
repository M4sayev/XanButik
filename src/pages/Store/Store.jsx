import React, { useContext, useEffect, useMemo, useState } from 'react'
import "./Store.css"
import HeaderStore from '../../components/StorePage/HeaderStore/HeaderStore'
import FilterComponent from '../../components/StorePage/FilterComponent/FilterComponent'
import Product from '../../components/StorePage/Products/Product'
import {itemsList} from '../../assets/itemsList.js';
import Pagination from '../../components/StorePage/Pagination/Pagination.jsx'
import CategoryButtons from '../../components/StorePage/CategoryButtons/CategoryButtons.jsx'
import { StoreContext } from '../../context/StoreContext.jsx'
import { FaProjectDiagram } from 'react-icons/fa'

const ITEMS_PER_PAGE = 8;

function Store() {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);

  const [ currentCategory, setCurrentCategory ] = useState("All");
  const [ products, setProducts ] = useState(itemsList);

  const {sortOptions, filters} = useContext(StoreContext);

  // Create categoryMap
  const categoryMap = useMemo(() => {
    return itemsList.reduce((map, product) => {
      if (!map[product.category]) {
          map[product.category] = [];
      }
      map[product.category].push(product);
      return map;
    }, {"All": itemsList});
  }, []);

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

  console.log({filteredProducts});

  // Filter products by filter options 
  const filteredByOptions = useMemo(() => {

    function hasCommonElement(arr1, arr2) {
      return arr1.some(element => arr2.includes(element));
    }

    const newProducts = filteredProducts.filter((product) => {
      let bool = true;
      Object.entries(filters).every(([filteredByOptions, data]) => {
        if (data.length && product[filteredByOptions])  {
          const productData = product[filteredByOptions];
            if (!Array.isArray(productData)) return false;
            bool = hasCommonElement(productData, data);
            if (!bool) return false; 
          }
          return true;
      });
      if (bool) return product;
    })

    return newProducts;
  }, [filters, filteredProducts])

   console.log({filteredByOptions});

  // Count total pages for the pagination
  const totalPages = useMemo(() => {
    return Math.ceil(filteredByOptions.length / ITEMS_PER_PAGE);
  }, [filteredByOptions]);

  // Create an array of page products for paginations
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredByOptions.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredByOptions]);

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
      <FilterComponent  
        currentCategory={currentCategory}
        setCurrentPage={setCurrentPage}
      />
      {
      (filteredProducts.length === 0 || filteredByOptions.length === 0)
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
