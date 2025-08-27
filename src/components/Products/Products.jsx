import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import productsList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const Products = ({ searchTerm, addToCart, addToWishList, wishList }) => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  //Filter by category
  const filteredByCategory =
    activeTab === "All"
      ? productsList
      : productsList.filter((item) => item.category === activeTab);

  //Filter by search term
  const finalFiltered = filteredByCategory.filter((item) =>
    item.title.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  //Render Products
  const renderProducts = finalFiltered
    .slice(0, 8)
    .map((product) => (
      <Cards
        key={product.id}
        id={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
        addToCart={addToCart}
        addToWishList={addToWishList}
        wishList={wishList}
      />
    ));

  return (
    <section id="product-section">
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex justify-center gap-3 mt-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`md:px-5 py-2 md:text-lg px-4 rounded-lg cursor-pointer ${
                activeTab === category
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                  : "bg-zinc-100"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="flex flex-wrap gap-6 justify-center">
          {renderProducts.length > 0 ? (
            renderProducts
          ) : (
            
            <p className="text-gray-500 mt-10">No products found.</p>
          )}
        </div>

        {/* Button */}
        <div className="mx-auto w-fit mt-15">
          <Link
            to="/allProducts"
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-md rounded-xl mb-5 text-white md:py-2 md:px-6 py-1 px-3 hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
