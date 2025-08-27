import React, { useLayoutEffect } from "react";

const OrderSummary = ({
  cart,
  subTotal,
  shippingFee,
  orderTotal,
  setOrderPlaced,
  setOrderSummary,
  setCart
}) => {
  const handlePlaceHolder = ()=>{
    setOrderSummary(false)
    setOrderPlaced(true)
    setCart([]);
  };

  return (
    <section className="flex justify-center items-center bg-black/70 fixed inset-0 z-[80]">
      <div className="bg-white p-8 w-[600px] rounded-2xl shadow-2xl border border-zinc-200 animate-fadeIn">
        {/* Heading */}
        <h2 className="text-3xl text-zinc-800 font-bold mb-6 text-center tracking-wide">
          🛒 Order Summary
        </h2>

        <div className="space-y-4">
          {/* Cart Items */}
          <div className="divide-y divide-zinc-200">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-3 text-zinc-700"
              >
                <span className="font-medium">
                  {item.title}{" "}
                  <span className="text-zinc-500">(x{item.quantity})</span>
                </span>
                <span className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="flex justify-between pt-3 text-zinc-700">
            <span className="font-medium">Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between text-zinc-700">
            <span className="font-medium">Shipping & Handling</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>

          {/* Order Total */}
          <div className="flex justify-between items-center pt-4 border-t border-zinc-200">
            <span className="text-blue-600 font-bold text-xl">Order Total</span>
            <span className="text-blue-600 font-bold text-xl">
              ${orderTotal.toFixed(2)}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-x-4 pt-6">
            <button className="flex-1 h-[48px] rounded-lg border border-zinc-300 text-zinc-600 font-medium hover:bg-zinc-100 transition-colors" onClick={()=>setOrderSummary(false)}>
              Cancel
            </button>
            <button
              onClick={handlePlaceHolder}
              className="flex-1 h-[48px] rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold shadow-md hover:opacity-90 transition-all"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
