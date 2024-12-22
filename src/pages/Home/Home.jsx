import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import SmartBanner from '../../components/SmartBanner/SmartBanner'
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems'
import ServicesBanner from '../../components/ServicesBanner/ServicesBanner'
import OurClientsCarousel from '../../components/OurClientsCarousel/OurClientsCarousel'

function Home() {
  return (
    <main>
      <Header />
      <SmartBanner />
      <FeaturedItems />
      <ServicesBanner />
      <OurClientsCarousel bg="light"/>
    </main>
  )
}

export default Home
