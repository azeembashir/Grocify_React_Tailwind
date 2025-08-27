import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  // leftvalues
  const leftValues = items.slice(0, 2).map((value) => {
    return (
      <div className="md:flex justify-center text-center md:flex-row-reverse items-center gap-5" key={value.id}>
        {/* icon */}
        <div className="flex justify-center">
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {value.icon}
          </span>
        </div>
        {/* content */}
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{value.title}</h3>
          <p className="text-zinc-600 mt-2">{value.para}</p>
        </div>
      </div>
    );
  });

  //   rightvalues
  const rightValues = items.slice(2, 4).map((value) => {
    return (
      <div className="md:flex text-center items-center gap-5" key={value.id}>
        {/* icon */}
        <div className="flex justify-center">
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {value.icon}
          </span>
        </div>
        {/* content */}
        <div className="md:text-left">
          <h3 className="text-zinc-800 text-3xl font-bold">{value.title}</h3>
          <p className="text-zinc-600 mt-2">{value.para}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-15 ">
        <Heading highlight="Our" heading="Values" />

        <div className=" flex md:flex-row flex-col  justify-center items-center gap-10 mt-5">
          {/* left value */}
          <div className="md:min-h-100 flex flex-col md:justify-between gap-10">
            {leftValues}
          </div>
          <div className="w-1/2 hidden md:flex">
            <img src={basket}  />
          </div>
          {/* right values */}
          <div className="min-h-100 flex flex-col md:justify-between gap-10">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const items = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaSeedling />,
  },
];
