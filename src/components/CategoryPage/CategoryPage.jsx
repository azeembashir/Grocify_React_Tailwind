import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import productsList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";


const CategoryPage = ({title, bgImage, categories=[]}) => {

   let filteredItems = categories.includes('All') ? productsList : productsList.filter(item=> categories.includes(item.category)) 

   useEffect(()=> {
    window?.scrollTo(0,0)
   },[])
  const renderProducts = filteredItems.map((product) => {
    return <Cards image={product.image} title={product.title} id={product.id} price={product.price} />;
  });
  return (
    <section>
      <div>
        <Banner title={title} bgImage={bgImage} />
      </div>

      <div className="max-w-[1400px] mx-auto px-10 mb-5 flex flex-wrap justify-center items-center gap-8">
        {renderProducts}
      </div>
    </section>
  );
};

export default CategoryPage;
//  import React from 'react'
//  import Heading from "../Heading/Heading";
// import dairyCat from "../../assets/dairy-and-eggs.png";

 
//  const CategoryPage = () => {
//    return (
//      <div className='flex flex-wrap justify-center items-center'>
//        <img src={dairyCat} />
//        <img src={dairyCat} />
//        <img src={dairyCat} />
//        <img src={dairyCat} />
//        <img src={dairyCat} />
//        <img src={dairyCat} />
//      </div>
//    )
//  }
 
//  export default CategoryPage
 