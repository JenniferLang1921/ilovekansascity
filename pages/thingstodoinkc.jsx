import Image from "next/image";
import bgImg from "../public/assets/things_to_do_in_Kansas_City.jpg";
import BlogList from "../components/BlogList";

const thingstodoinkc = () => {
  return (
    <div className="w-full h-{400px} bg-white flex flex-col justify-between">
      <Image className="w-full" src={bgImg} alt="Kansas City Skyline" />
      <div className="container mx-auto w-2/3">
        <h1 className="text-center pt-5 mx-12 text-3xl ">Things To Do In KC</h1>
        <div className="border-b-4  border-red-900 w-1/3 mx-auto p-2 mb-8"></div>
      </div>
      <BlogList />
    </div>
  );
};

export default thingstodoinkc;
