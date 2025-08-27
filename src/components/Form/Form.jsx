import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Form = () => {
  const formData = useRef("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9yi969a",
        "template_kysxer5",
        formData.current,
        "C_MX_VVp0BdrIVtza"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Done!",
          text: "Your action was successful.",
          showConfirmButton: false,
          timer: 2000, // 2 seconds
        });
        formData.current.reset();
      }),
      (error) => {
        console.error(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 2000,
        });
      };
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-4 ">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl mt-30 mb-10 p-6 sm:p-8 md:p-10 lg:p-12">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800">
          Get In <span className="text-orange-400">Touch</span>
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-6 text-sm sm:text-base lg:text-lg">
          Fill out the form below and we’ll get back to you soon.
        </p>

        {/* Form */}
        <form
          autoComplete="off"
          className="space-y-5"
          ref={formData}
          onSubmit={sendEmail}
        >
          {/* Name & Email in grid from md */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-1 focus:ring-orange-300 focus:border-green-500 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-orange-500 outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              rows="4"
              id="message"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer w-full py-3 rounded-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
