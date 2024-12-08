import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import StoreContextProvider from "./context/StoreContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{ v7_startTransition: true }}>
    <ParallaxProvider>
      <StrictMode>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </StrictMode>
    </ParallaxProvider>
  </BrowserRouter>
)
