import './App.css'
import { useRef, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ContactUs from './pages/ContactUs/ContactUs'
import Store from './pages/Store/Store'
import Wishlist from './pages/Wishlist/Wishlist'
import Cart from './pages/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { StoreContext } from './context/StoreContext'
import Testimonials from './pages/Testimonials/Testimonials'

function App() {
  const loginPopupRef = useRef(null);
  const { showLogin, setShowLogin } = useContext(StoreContext);

  function handleClickOutside(event) {
    if (loginPopupRef.current && !loginPopupRef.current.contains(event.target)) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    if (showLogin) {
      window.addEventListener("mousedown", handleClickOutside)
    }
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [showLogin]);

  return (
    <>
      {showLogin ? <LoginPopup innerRef={loginPopupRef} /> : <></>}
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Testimonials' element={<Testimonials />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Store' element={<Store />} />
          <Route path='/Wishlist' element={<Wishlist />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
