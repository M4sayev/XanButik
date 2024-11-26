import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import SmartBanner from '../../components/SmartBanner/SmartBanner'
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems'

function Home() {
  return (
    <main>
      <Header />
      <SmartBanner />
      <FeaturedItems />
    </main>
  )
}

export default Home
