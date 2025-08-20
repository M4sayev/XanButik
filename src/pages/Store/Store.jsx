import React from 'react'
import "./Store.css"
import HeaderStore from '../../components/StorePage/HeaderStore/HeaderStore'
import FilterComponent from '../../components/StorePage/filterComponent/FilterComponent'
import Product from '../../components/StorePage/Products/Product'

function Store() {
  return (
    <main>
      <HeaderStore />
      <FilterComponent />
      <section className='str-products-grid'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </main>
  )
}

export default Store
