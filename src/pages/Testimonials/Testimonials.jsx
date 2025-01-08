import React from 'react'
import TestimonialsHeader from '../../components/TestimonialsPage/TestimonialsHeader/TestimonialsHeader'
import TestimonialsReviewsCarousel from '../../components/TestimonialsPage/TestimonailsReviewsCarousel/TestimonialsReviewsCarousel'
import TestimonialsOurClients from '../../components/TestimonialsPage/TestimonialsOurClients/TestimonialsOurClients'
import TestSubscribeForm from '../../components/TestimonialsPage/TestSubscribeForm/TestSubscribeForm'

function Testimonials() {
  return (
    <main>
      <TestimonialsHeader />
      <TestimonialsReviewsCarousel />
      <TestimonialsOurClients />
      <TestSubscribeForm />
    </main>
  )
}

export default Testimonials
