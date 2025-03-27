import React, { useContext, useState } from 'react'
import "./HeaderStore.css"
import {assets} from "../../../assets/assets"
import { IoSearchSharp } from 'react-icons/io5'
import {StoreContext} from "../../../context/StoreContext"
import { useInView } from 'react-intersection-observer'
 
function HeaderStore() {
  const { handleAnimation } = useContext(StoreContext);
  const { ref: imgRef, inView: imgInView } = useInView();
  const { ref: textRef, inView: textInView } = useInView();

  const { query, setQuery } = useState("");

  return (
    <header className='header-store'>
      <div className="header-store-contents">
        <div ref={imgRef} className={`store-header-img-wrapper ${handleAnimation(imgInView)}`}>
          <img className="header-store-img" src={assets.store_header} alt="Xan Butik" />
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
                  <input 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    className='store-search-input' 
                    type="text" 
                    placeholder='Search for items'
                  />
                </div>
                <button className='std-button'>Search</button>
            </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderStore
