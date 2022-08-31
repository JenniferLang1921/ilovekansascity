import React from "react";
import Hero from "../components/Hero";

const about = () => {
  return (
    <div className="container mx-auto w-2/3">
      <h1 className="text-center pt-40 mx-12 text-3xl ">About</h1>
      <div className="border-b-4  border-red-900 w-1/3 mx-auto p-2 mb-8"></div>
      <p>
        Welcome to KC! This website is designed to create unique and memorable
        experiences for you. We hope to take the work out of planning and give
        you a locally curated selection of fun and memorable moments for you and
        your favorite people.
      </p>
    </div>
  );
};

export default about;
