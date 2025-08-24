import React, { useState } from 'react'
import "./Store.css"
import HeaderStore from '../../components/StorePage/HeaderStore/HeaderStore'
import FilterComponent from '../../components/StorePage/filterComponent/FilterComponent'
import Product from '../../components/StorePage/Products/Product'
import {itemsList} from '../../assets/itemsList.js';

function Store() {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ products, setProducts ] = useState(itemsList);

  function applyFilters(query) {
    const trimmedQuery = query.trim().toLowerCase();
    const filtered = itemsList.filter(item => item.name.toLowerCase().includes(query));
    setProducts(filtered);
  };

  return (
    <main>
      <HeaderStore applyFilters={applyFilters} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <FilterComponent />
      <section className='str-products-grid'>
        {
          products.map((product) => {
            return <Product key={product.id} {...product} />
          })
        }
      </section>
    </main>
  )
}

export default Store
