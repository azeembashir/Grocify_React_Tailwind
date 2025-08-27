import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import dairyBanner from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
        <CategoryPage title='Dairy & Eggs' bgImage={dairyBanner} categories={['Dairy']} />
    </div>
  )
}

export default Dairy
