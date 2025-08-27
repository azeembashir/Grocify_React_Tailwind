import React from 'react'
import Heading from '../Heading/Heading'
import ProcessContent from '../ProcessContent/ProcessContent'

const MainProcess = () => {
  return (
    <section className='max-w-[1400px] mx-auto px-10 py-20'>
        <div className=' mb-20'>
            <Heading highlight='Our' heading='Process' />
        </div>

        <div>
            <ProcessContent />
        </div>
    </section>
  )
}

export default MainProcess
