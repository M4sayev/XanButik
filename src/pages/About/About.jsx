import React from 'react'
import "./About.css"
import AboutUsHeader from '../../components/AboutUsHeader/AboutUsHeader'
import OurResultsBanner from '../../components/OurResultsBanner/OurResultsBanner'
import Welcome from '../../components/Welcome/Welcome'
import OurServices from '../../components/OurServices/OurServices'
import OurClientsCarousel from '../../components/OurClientsCarousel/OurClientsCarousel'
import ComingSoon from '../../components/ComingSoon/ComingSoon'

function About() {
  return (
    <div>
      <AboutUsHeader />
      <OurResultsBanner />
      <Welcome />
      <OurServices />
      <OurClientsCarousel bg={"dark"} />
      <ComingSoon />
    </div>
  )
}

export default About
