import React from 'react'
import TestimonialsHeader from '../../components/TestimonialsPage/TestimonialsHeader/TestimonialsHeader'
import TestimonialsReviewsCarousel from '../../components/TestimonialsPage/TestimonailsReviewsCarousel/TestimonialsReviewsCarousel'
import TestimonialsOurClients from '../../components/TestimonialsPage/TestimonialsOurClients/TestimonialsOurClients'

function Testimonials() {
  return (
    <main>
      <TestimonialsHeader />
      <TestimonialsReviewsCarousel />
      <TestimonialsOurClients />
    </main>
  )
}

export default Testimonials
