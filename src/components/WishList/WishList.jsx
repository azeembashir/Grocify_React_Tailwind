import React from "react";
import cabbage from "../../assets/cabbage.png";

const WishList = ({
  activePanel,
  closedPanel,
  wishList,
  id,
  image,
  title,
  price,
  addToCart,
  clearWishList
}) => {
  return (
    <div
      className={`flex flex-col justify-between bg-white fixed top-0 right-0 bottom-0 z-[80] w-[400px] border-l border-zinc-200 shadow-xl py-6 transform transition-transform duration-300 ${
        activePanel === "wishlist" ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* heading */}
      <div className="px-6 flex justify-between items-center border-b border-zinc-200 pb-4">
        <h3 className="text-2xl font-bold text-zinc-800">❤️ Your Wishlist</h3>
        <button
          onClick={closedPanel}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600"
        >
          ✕
        </button>
      </div>

      {/* card items */}
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto px-4 py-3">
        {wishList.length === 0 ? (
          <p className="text-zinc-500 text-center mt-32">
            Your Wishlist is empty.
          </p>
        ) : (
          wishList.map((product, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-zinc-50 hover:bg-zinc-100 rounded-lg p-3 shadow-sm transition"
            >
              {/* product image */}
              <div className="w-20 h-20 flex items-center justify-center bg-white border border-zinc-200 rounded-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* product details */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-zinc-800 text-base leading-snug">
                    {product.title}
                  </h4>
                  <p className="text-xs text-zinc-500">{product.addDate}</p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-orange-600 font-bold">
                    ${product.price}
                  </span>
                  <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs px-4 py-1.5 rounded-full shadow hover:opacity-90 transition"
                  onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* buttons */}
      <div className="flex gap-3 px-6 pt-3 pb-4 border-t border-zinc-200 bg-zinc-50 rounded-t-xl">
        <button
          className="flex-1 h-11 rounded-lg border border-zinc-300 text-zinc-700 font-medium hover:bg-zinc-100 transition"
          onClick={closedPanel}
        >
          Close
        </button>
        <button
          disabled={wishList.length === 0}
          className={`flex-1 h-11 rounded-lg font-semibold text-white shadow-md transition ${
            wishList.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-400 to-orange-500 hover:opacity-90"
          }`}
        onClick={clearWishList}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default WishList;
