import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

const Cart = ({
  activePanel,
  closedPanel,
  cart,
  removeItem,
  quantityIncrement,
  quantityDeccrement,
  subTotal,
  shippingFee,
  orderTotal,
  setOrderSummary,
}) => {
  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-white fixed top-0 right-0 bottom-0 z-[80] w-[400px] border-l border-zinc-200 shadow-xl py-7 transform transition-transform duration-300 ${
        activePanel === "cart" ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* heading */}
      <div className="px-6 flex justify-between items-center border-b border-zinc-200 pb-4">
        <h3 className="text-2xl font-bold text-zinc-800">🛒 Your Cart</h3>
        <button
          onClick={closedPanel}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600"
        >
          ✕
        </button>
      </div>

      {/* cart items */}
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto px-4">
        {cart.length === 0 ? (
          <p className="text-zinc-500 text-center mt-32">Your cart is empty.</p>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
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
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-zinc-800 text-base leading-snug">
                    {product.title}
                  </h4>
                  <button
                    onClick={() => removeItem(product)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition"
                  >
                    <FaTrash />
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-orange-600 font-bold text-sm">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => quantityDeccrement(product)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    >
                      <FaMinus />
                    </button>
                    <span className="font-medium">{product.quantity}</span>
                    <button
                      onClick={() => quantityIncrement(product)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* totals */}
      <div className="px-6 py-4 border-t border-zinc-200 bg-zinc-50 rounded-t-xl">
        <div className="flex justify-between py-1 text-zinc-700">
          <span>Subtotal</span>
          <span>${subTotal?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-1 text-zinc-700">
          <span>Shipping & Handling</span>
          <span>${shippingFee?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-3 mt-2 border-t border-zinc-200">
          <span className="text-lg text-blue-600 font-bold">Order Total</span>
          <span className="text-lg text-blue-600 font-bold">
            ${orderTotal?.toFixed(2)}
          </span>
        </div>
      </div>

      {/* buttons */}
      <div className="flex gap-3 px-6 pb-4">
        <button
          className="flex-1 h-11 rounded-lg border border-zinc-300 text-zinc-700 font-medium hover:bg-zinc-100 transition"
          onClick={closedPanel}
        >
          Close
        </button>
        <button
          disabled={cart.length === 0}
          onClick={() => setOrderSummary(true)}
          className={`flex-1 h-11 rounded-lg font-semibold text-white shadow-md transition ${
            cart.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-400 to-orange-500 hover:opacity-90"
          }`}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
