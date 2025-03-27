import React from 'react'
import "./Store.css"
import HeaderStore from '../../components/StorePage/HeaderStore/HeaderStore'
import FilterComponent from '../../components/StorePage/filterComponent/FilterComponent'

function Store() {
  return (
    <main>
      <HeaderStore />
      <FilterComponent />
    </main>
  )
}

export default Store
