import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgBanner from '../../assets/all-banner.jpg';
const AllProducts = () => {
  return (

    <div>
      <CategoryPage title='All Products' bgImage={bgBanner} categories={['All']}/>
    </div>
  )
}

export default AllProducts
