import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import seafoodBanner from '../../assets/seafood-banner.jpg';

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title='Meat & Sea Food' bgImage={seafoodBanner} categories={['Meat', 'SeaFood']} />
    </div>
  )
}

export default SeaFood
