import { IoBookOutline } from "react-icons/io5";
import dotup from "@/assets/Banner/Group 1171275299.svg";
import dotdown from "@/assets/Banner/Group 1171275300.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="min-h-[600px] flex justify-center items-center">
      <div className="text-center">
        <div className="relative">
          <Image
            src={dotup}
            alt="dotup"
            className="absolute -left-24 -top-28 hidden md:block"
          />
          <h1 className="font-semibold text-5xl">
            Transform Education with Smart Management
          </h1>
          <Image
            src={dotdown}
            alt="dotdown"
            className="absolute -right-24 -top-4 hidden md:block"
          />
        </div>
        <h6 className="text-xl lg:text-3xl my-5 lg:my-10 max-w-4xl mx-auto">
          Boost efficiency, enhance learning, and simplify administration with
          our smart solution.
        </h6>
        <div className="flex justify-center">
          <button className="btn1 text-xl flex items-center gap-2">
            <IoBookOutline size={20} /> Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
