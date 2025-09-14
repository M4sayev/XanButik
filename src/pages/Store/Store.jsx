import React, { useContext, useEffect, useMemo, useState } from 'react'
import "./Store.css"
import HeaderStore from '../../components/StorePage/HeaderStore/HeaderStore'
import FilterComponent from '../../components/StorePage/FilterComponent/FilterComponent'
import Product from '../../components/StorePage/Products/Product'
import {itemsList} from '../../assets/itemsList.js';
import Pagination from '../../components/StorePage/Pagination/Pagination.jsx'
import CategoryButtons from '../../components/StorePage/CategoryButtons/CategoryButtons.jsx'
import { StoreContext } from '../../context/StoreContext.jsx'

const ITEMS_PER_PAGE = 8;

function Store() {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);

  const [ currentCategory, setCurrentCategory ] = useState("All");
  const [ products, setProducts ] = useState(itemsList);

  const {sortOptions, filters, calculateDiscountPrice, priceRange} = useContext(StoreContext);

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

  // Price range filter
  const productsWithinRange = useMemo(() => {
    return filteredProducts.filter((product) => {
      const totalPrice = calculateDiscountPrice(product.price, product.discountPercent);
      return ((totalPrice <= priceRange[1]) && (totalPrice >= priceRange[0]));
    })
  }, [priceRange, filteredProducts])

  // Sort products by sort options
  const filteredBySortOptions = useMemo(() => {
    let newProducts;
    switch (sortOptions) {
      case "Recommended":
        newProducts =  productsWithinRange;
        break;
      case "What's new":
        newProducts = productsWithinRange.filter((product) => product.isNewArrival);
        break;
      case "Price low to high":
        newProducts = productsWithinRange.toSorted((productOne, productTwo) => {
          const priceOne = calculateDiscountPrice(productOne.price, productOne.discountPercent);
          const priceTwo = calculateDiscountPrice(productTwo.price, productTwo.discountPercent);
          return priceOne - priceTwo;
        });
        break;
      case "Price high to low":
        newProducts = productsWithinRange.toSorted((productOne, productTwo) => {
          const priceOne = calculateDiscountPrice(productOne.price, productOne.discountPercent);
          const priceTwo = calculateDiscountPrice(productTwo.price, productTwo.discountPercent);
          return priceTwo - priceOne;
        });
        break;
    }

    return newProducts;
  }, [sortOptions, productsWithinRange])

  // Filter products by filter options 
  const filteredByFilterOptions = useMemo(() => {

    function hasCommonElement(arr1, arr2) {
      return arr1.some(element => arr2.includes(element));
    }

    const newProducts = filteredBySortOptions.filter((product) => {
      let bool = true;
      Object.entries(filters).every(([filter, data]) => {
        if (data.length && product[filter])  {
          const productData = product[filter];
            if (!Array.isArray(productData)) return false;
            bool = hasCommonElement(productData, data);
            if (!bool) return false; 
          }
          return true;
      });
      if (bool) return product;
    })

    return newProducts;
  }, [filters, filteredBySortOptions])

  // Count total pages for the pagination
  const totalPages = useMemo(() => {
    return Math.ceil(filteredByFilterOptions.length / ITEMS_PER_PAGE);
  }, [filteredByFilterOptions]);

  // Create an array of page products for paginations
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredByFilterOptions.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredByFilterOptions]);

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
      (filteredProducts.length === 0 || filteredByFilterOptions.length === 0)
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
