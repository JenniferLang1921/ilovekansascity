import React from "react";
import Hero from "../components/Hero";

const kceventsthisweekend = () => {
  return (
    <div className="container mx-auto w-2/3">
      <h1 className="text-center pt-40 mx-12 text-3xl ">
        KC Events This Weekend
      </h1>
      <div className="border-b-4  border-red-900 w-1/3 mx-auto p-2 mb-8"></div>
      <p>Coming Soon!</p>
      <script
        async
        src="https://cse.google.com/cse.js?cx=f0925206bb3824417"
      ></script>
      <div class="gcse-search"></div>
    </div>
  );
};

export default kceventsthisweekend;
