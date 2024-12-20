import React from 'react'
import "./About.css"
import AboutUsHeader from '../../components/AboutUsHeader/AboutUsHeader'
import OurResultsBanner from '../../components/OurResultsBanner/OurResultsBanner'
import Welcome from '../../components/Welcome/Welcome'
import OurServices from '../../components/OurServices/OurServices'

function About() {
  return (
    <div>
      <AboutUsHeader />
      <OurResultsBanner />
      <Welcome />
      <OurServices />
    </div>
  )
}

export default About
