import React, { useContext, useRef, useState } from 'react'
import "./HeaderStore.css"
import {assets} from "../../../assets/assets"
import { IoSearchSharp } from 'react-icons/io5'
import {StoreContext} from "../../../context/StoreContext"
import { useInView } from 'react-intersection-observer'

const SEARCH_DEBOUNCE = 300;
 
function HeaderStore({setSearchQuery, searchQuery }) {
  const { handleAnimation } = useContext(StoreContext);
  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const { ref: textRef, inView: textInView } = useInView();
  const debounceTimeout = useRef(null);

  function handleSearchInput(e) {
    const value = e.target.value;

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setSearchQuery(value);
    }, SEARCH_DEBOUNCE);
  }

  return (
    <header className='header-store'>
      <div className="header-store-contents">
        <div ref={imgRef} className={`store-header-img-wrapper ${handleAnimation(imgInView)}`}>
          <img 
            className="header-store-img" 
            src={assets.store_header} 
            alt="Banner for Xan Butik men's apparel"  
          />
        </div>
        <div className="header-store-search-text-container">
            <div className='header-store-text-wrapper'>
              <article ref={textRef} className={`header-store-text-container ${handleAnimation(textInView)}`}>
                  <h1 className="std-heading clr-white">Men's Brandy Apparel</h1>
                  <p className='store-header-p | std-paragraph clr-white'>Discover our exquisite collection of menswear. From classic to casual clothes, we've got you covered.</p>
              </article>
            </div>
            <div className="search-bar-container">
                <div className="store-search-input-wrapper">
                  <IoSearchSharp  className='search-icon' />
                  <label htmlFor="searchBar" className='visually-hidden'>Search for products</label>
                  <input 
                    value={searchQuery} 
                    name='searchBar'
                    id='searchBar'
                    onChange={handleSearchInput} 
                    className='store-search-input' 
                    type="text" 
                    placeholder='Search for items'
                  />
                </div>
                <button className='std-button search-btn' aria-label="Submit search">Search</button>
            </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderStore
