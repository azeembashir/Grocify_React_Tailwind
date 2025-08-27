import bgFruits from "../../assets/fresh-fruits.png";
import Button from "../Button/Button";
export default function Discount() {
  return (
    <section
      className="relative bg-gray-200 flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-10 md:py-12 mb-12"
      style={{
        backgroundImage: `url(${bgFruits})`,
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // ya "cover" apki need k hisaab se
      }}
    >
      {/* Left Side - Rotated Discount */}
      <div className="flex-shrink-0 md:mb-6 ">
        <h2 className="text-5xl sm:text-6xl md:text-[80px] font-bold md:text-orange-600 md:transform md:-rotate-90">
          20%
        </h2>
      </div>

      {/* Middle Content */}
      <div className="flex-1 px-2 sm:px-4 md:px-8 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          First Order <br className="hidden sm:block" /> Discount!
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
          Enjoy an exclusive first order discount on our grocery website! Shop
          fresh essentials and save big on your first purchase. Fast delivery
          and quality guaranteed.
        </p>

        {/* button */}
        <div className="mt-5">
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  );
}
