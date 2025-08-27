import React from "react";
import Button from "../Button/Button";
import grocery from "../../assets/grocery.png";
// import heroBg from "../../assets/heroBg.png";

const Hero = () => {
  return (
    <section>
      
      <div className="max-w-[1400px] mx-auto px-10 min-h-screen lg:flex-row flex flex-col justify-center items-center text-center pt-25">
        <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start md:text-start ">
          <span className="bg-orange-100 text-orange-600 py-1 px-4 rounded-full md:mb-6">
            Export Best Quality...
          </span>
          <h1 className="mt-6 lg:mb-8 mb-4 text-3xl text-center lg:text-left  lg:text-7xl sm:text-5xl font-bold lg:leading-20">
            Tasty Organic <span className="text-orange-500">Fruits</span> & {" "}
            <span className="text-orange-500">Veggies</span> <br /> In Your City
          </h1>
          <p className="text-zinc-600 lg:text-lg lg:mb-8 mb-4 max-w-[530px] text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            quam eligendi, in aperiam sed alias.
          </p>
          <Button content="Shop Now" />
        </div>

        <div className="flex-1 w-[300px] ">
          <img src={grocery} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
