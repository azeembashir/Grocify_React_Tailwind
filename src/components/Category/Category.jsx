import React from "react";
import Heading from "../Heading/Heading";
import foodCat from "../../assets/fruits-and-veggies.png";
import dairyCat from "../../assets/dairy-and-eggs.png";
import meatFoodCat from "../../assets/meat-and-seafood.png";
import { Link } from "react-router-dom";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Category = () => {
  return (
    <section>
      <div className="py-20">
        <Heading highlight="Shop" heading="by Category" />

        {/* --- Mobile (< md) => Swiper Slider --- */}
        <div className="block md:hidden px-6 mt-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            {category.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="flex-1 basis-[300px]">
                  {/* card image */}
                  <div className="w-full min-h-[30vh] relative -mb-10">
                    <img src={card.image} className="absolute bottom-0" />
                  </div>
                  {/* card content */}
                  <div className="bg-zinc-100 pt-17 p-8 rounded-xl flex flex-col justify-center items-center text-center">
                    <h3 className="text-zinc-800 text-3xl font-bold">
                      {card.title}
                    </h3>
                    <p className="text-zinc-600 mt-3 mb-9">
                      {card.description}
                    </p>
                    <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-md  rounded-xl mb-5 text-white md:py-2 md:px-6 py-1 px-3 hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- Desktop (md+) => Flex Grid --- */}
        <div className="hidden md:flex flex-wrap gap-10 max-w-[1400px] mx-auto px-10 md:mt-15">
          {category.map((card) => (
            <div className="flex-1 basis-[300px]" key={card.id}>
              {/* card image */}
              <div className="w-full min-h-[30vh] relative -mb-10">
                <img src={card.image} className="absolute bottom-0" />
              </div>
              {/* card content */}
              <div className="bg-zinc-100 pt-17 p-8 rounded-xl flex flex-col justify-center items-center text-center md:items-start md:text-start">
                <h3 className="text-zinc-800 text-3xl font-bold">
                  {card.title}
                </h3>
                <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
                <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-md  rounded-xl mb-5 text-white md:py-2 md:px-6 py-1 px-3 hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & veggies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quam eligendi, in aperiam sed alias.",
    image: foodCat,
    path: '/fruits',
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quam eligendi, in aperiam sed alias.",
    image: dairyCat,
    path: '/dairy',
  },
  {
    id: 3,
    title: "Meat & Sea Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quam eligendi, in aperiam sed alias.",
    image: meatFoodCat,
    path: '/seafood',
  },
];
