import React from 'react'
import Banner from '../components/Banner'
import BestDeals from '../components/BestDeals'
import  Features from '../components/Features'
import ProductSection from '../components/ProductSection'
import ProductTabs from '../components/ProductsTabs'
import PopularProducts from '../components/Popular Products'
import SearchSection from '../components/SearchSection'


import CategorySection from '../components/CategoriesSection'

const HomePage = () => {
  return (
    <div className='bg-[#E3E6E6]'>
     <Banner/>
      <BestDeals/>
      <ProductSection/>
      <CategorySection/>
      <Features/>
      <BestDeals/>
      
     
      <ProductTabs/>
      <PopularProducts/>
      <SearchSection/>
     
     
    </div>
  )
}

export default HomePage