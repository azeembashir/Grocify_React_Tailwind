import React, { useState, useEffect } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const Navbar = ({ handleScroll, setSearchTerm, handlePanel, totalItems, wishList }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center ">
        <Link to="/" className="md:text-3xl text-2xl font-bold">
          Gr<span className="text-orange-500">O</span>cify
        </Link>

        {/* desktop navbar */}
        <ul className="md:flex  items-center gap-x-15 hidden">
          <li>
            <Link
              to="/"
              onClick={() => setActive("Home")}
              className={`relative font-semibold tracking-wider hover:text-orange-500 pb-1 transition-colors duration-300 
      ${active === "Home" ? "text-orange-500" : "text-gray-700"}`}
            >
              Home
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-orange-500 rounded-full transition-all duration-300 
        ${active === "Home" ? "w-3/5 opacity-100" : "w-0 opacity-0"}`}
              ></span>
            </Link>
          </li>

          <li>
            <a
              href="#"
              onClick={() => setActive("About Us")}
              className={`relative font-semibold tracking-wider hover:text-orange-500 pb-1 transition-colors duration-300 
      ${active === "About Us" ? "text-orange-500" : "text-gray-700"}`}
            >
              About Us
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-orange-500 rounded-full transition-all duration-300 
        ${active === "About Us" ? "w-3/5 opacity-100" : "w-0 opacity-0"}`}
              ></span>
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={() => setActive("Process")}
              className={`relative font-semibold tracking-wider hover:text-orange-500 pb-1 transition-colors duration-300 
      ${active === "Process" ? "text-orange-500" : "text-gray-700"}`}
            >
              Process
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-orange-500 rounded-full transition-all duration-300 
        ${active === "Process" ? "w-3/5 opacity-100" : "w-0 opacity-0"}`}
              ></span>
            </a>
          </li>

          <li>
            <Link
              to="/contact-us"
              onClick={() => setActive("ContactUs")}
              className={`relative font-semibold tracking-wider hover:text-orange-500 pb-1 transition-colors duration-300 
      ${active === "ContactUs" ? "text-orange-500" : "text-gray-700"}`}
            >
              Contact Us
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-orange-500 rounded-full transition-all duration-300 
        ${active === "ContactUs" ? "w-3/5 opacity-100" : "w-0 opacity-0"}`}
              ></span>
            </Link>
          </li>
        </ul>

        {/* nav action */}

        <div className="flex items-center gap-x-5">
          <div className="md:flex items-center border border-orange-400 rounded-full px-3 py-1 hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              onFocus={handleScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:outline-none"
            />
            <button className="hover:scale-90 transition-all duration-300 text-white bg-gradient-to-b from-orange-400 to-orange-500 rounded-full p-2 ">
              <IoSearchOutline />
            </button>
          </div>
          <a
            href="#"
            className="text-2xl text-zinc-800 relative"
            onClick={() => handlePanel("wishlist")}
          >
            <GoHeartFill className="hover:scale-125 transition-all duration-300" />
            {
              wishList?.length > 0 &&
              <span className="flex justify-center items-center bg-orange-500 text-white h-4 w-4 rounded-full text-[12px] absolute top-4 right-3">
              {wishList.length}
            </span>
            }
          </a>
          <a
            href="#"
            className="text-2xl text-zinc-800 relative"
            onClick={() => handlePanel("cart")}
          >
            <HiMiniShoppingBag className="hover:scale-125 transition-all duration-300" />
            {totalItems > 0 && (
              <span className="flex justify-center items-center bg-orange-500 text-white h-4 w-4 rounded-full text-[12px] absolute top-4 right-4">
                {totalItems}
              </span>
            )}
          </a>

          {/* Hamburger */}
          <a
            href="#"
            className="text-zinc-800 text-2xl md:hidden sm:block "
            onClick={toggleMenu}
          >
            {showMenu ? (
              <TbMenu3 className="transition-all duration-500" />
            ) : (
              <FaBars />
            )}
          </a>
        </div>

        {/* mobile navbar */}
        <ul
          className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl shadow-xl p-10  items-center gap-x-15 md:hidden absolute top-26 -left-full transform -translate-x-1/2 transition-all duration-500 ${
            showMenu ? "left-1/2" : ""
          }`}
        >
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500 hover:text-zinc-800"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex items-center border border-orange-400 rounded-full px-3 py-1 md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              className="focus:outline-none"
            />
            <button className="hover:scale-90 transition-all duration-300 text-white bg-gradient-to-b from-orange-400 to-orange-500 rounded-full p-2 ">
              <IoSearchOutline />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
