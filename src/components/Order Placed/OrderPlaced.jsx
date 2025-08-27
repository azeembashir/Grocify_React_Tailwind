import React from "react";

const OrderPlaced = ({setOrderPlaced}) => {
  return (
    <section className="flex justify-center items-center bg-black/80 fixed inset-0 z-[80]">
      <div className="flex flex-col items-center gap-4 bg-white p-8 w-[500px] rounded-2xl shadow-2xl border border-zinc-200 animate-fadeIn">
        {/* Success Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-zinc-800 text-center">
          Order Placed Successfully 🎉
        </h2>

        {/* Message */}
        <p className="text-zinc-600 text-center">
          Thank you for your purchase! <br />
          Your order is being processed and we’ll notify you once it’s shipped.
        </p>



        {/* CTA */}
        <button className="mt-4 px-6 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-all duration-300" onClick={()=> setOrderPlaced(false) }>
          Continue Shopping
        </button>
      </div>
    </section>
  );
};

export default OrderPlaced;
