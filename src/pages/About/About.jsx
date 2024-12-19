import React from 'react'
import "./About.css"
import AboutUsHeader from '../../components/AboutUsHeader/AboutUsHeader'
import OurResultsBanner from '../../components/OurResultsBanner/OurResultsBanner'
import Welcome from '../../components/Welcome/Welcome'

function About() {
  return (
    <div>
      <AboutUsHeader />
      <OurResultsBanner />
      <Welcome />
    </div>
  )
}

export default About
