import React from "react";

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
      <p className="my-4">
        We believe in the Midwest values of generosity, honesty, hard work,
        kindness, and hospitality.
      </p>
      <p className="my-4">
        We believe in taking care of our people and our city because people are
        valuable and environment matters.
      </p>
      <p className="my-4">
        We believe in making Kansas City a welcoming place for everyone.
      </p>
    </div>
  );
};

export default about;
