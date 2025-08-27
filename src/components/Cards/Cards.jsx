import React from "react";
import Products from "../Products/Products";
import { IoIosHeart } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Button from "../Button/Button";

const Cards = ({ image, title, price, id, addToCart, addToWishList, wishList }) => {
  // Products
  return (
    <div
      key={id}
      className="w-full sm:w-[48%] lg:w-[23%] mt-14 flex flex-col justify-between items-center text-center bg-zinc-100 p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
    > 
      {/* icons */}
      <div className="flex justify-between w-full text-xl mb-4">
        <IoIosHeart className={`cursor-pointer  hover:text-red-500 transition-colors ${wishList?.some(item=> item.id === id) ? 'text-red-500' : ''}`} onClick={() => addToWishList({ id, image, title, price })} />
        <FaPlus
          className="cursor-pointer hover:text-orange-500 transition-colors"
          onClick={() => addToCart({ id, image, title, price })}
        />
      </div>

      {/* image */}
      <div className="w-full h-40 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* content */}
      <div className="mt-4">
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>

      {/* button */}
      <div className="mt-4">
        <button
          className="bg-gradient-to-b from-orange-400 to-orange-500 text-md  rounded-xl mb-5 text-white md:py-2 md:px-6 py-1 px-3 hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          onClick={() => addToCart({ id, image, title, price })}
        >
          Shop Now
        </button>
      </div>
    </div>
  );  
};

export default Cards;
