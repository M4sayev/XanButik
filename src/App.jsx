import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ContactUs from './pages/ContactUs/ContactUs'
import Store from './pages/Store/Store'
import Wishlist from './pages/Wishlist/Wishlist'
import Cart from './pages/Cart/Cart'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Store' element={<Store />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
