import React from 'react'
import Heading from '../Heading/Heading'
import TestimonialsContent from './TestimonialContent'

const MainTestimonial = () => {
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <div>
                <Heading highlight='Customers' heading='Saying' />
            </div>

            <div>
                <TestimonialsContent />
            </div>
        </div>
    </section>
  )
}

export default MainTestimonial
