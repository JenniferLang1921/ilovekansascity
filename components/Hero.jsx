import React from "react";
import Image from "next/image";
import bgImg from "../public/assets/kansas-city-skyline.jpg";

const Hero = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-between">
      <Image className="w-full" src={bgImg} alt="Kansas City Skyline" />
      <h2 className="text-center mt-10 mx-12 text-3xl ">
        Kansas City's Best Food and Travel Blog
      </h2>
      <div className="border-b-4 border-red-900 w-1/3 mx-auto p-2 mb-8"></div>
    </div>
  );
};

export default Hero;
