import React from 'react'
import Hero from './Hero'
import About from './About'
import WhatWeOffer from './WhatWeOffer'
import LatestCourses from './LatestCourses'
import Testimonials from './Testimonials'

function Home() {
  return (
    <div>
      <Hero/>
      <WhatWeOffer/>
      <About/>
      <LatestCourses/>
      <Testimonials/>
    </div>
  )
}

export default Home
