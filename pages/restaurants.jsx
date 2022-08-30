import React from "react";
import Image from "next/image";
import bgImg from "../public/assets/KC_Restaurants.jpg";

const restaurants = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-between">
      <Image className="w-full" src={bgImg} alt="Kansas City Skyline" />
      <div className="container mx-auto w-2/3">
        <h1 className="text-center pt-5 mx-12 text-3xl ">Restaurants</h1>
        <div className="border-b-4  border-red-900 w-1/3 mx-auto p-2 mb-8"></div>
        <p>Coming Soon!</p>
        {/*   <p>https://data.kcmo.org/resource/apvm-9tkz.json</p>  */}
      </div>
    </div>
  );
};

export default restaurants;
