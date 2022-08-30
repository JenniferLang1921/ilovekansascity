import bgImg from "../public/assets/blogImgs/romantic_roses.jpg";
import Image from "next/image";

const romanticitalian = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-between">
      <Image className="w-full" src={bgImg} alt="Romantic Roses" />
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-center mt-6 p mx-12 pt-5 text-3xl baskerville">
          Ooh La La Italian
        </h1>
        <div className="border-b-4  border-red-900 w-1/3 mx-auto p-2 mb-8"></div>
        <p className="mt-10">Begin the date with her favorite flowers</p>
        <p className="mt-5">
          Make reservations:{" "}
          <a
            className="text-red-900 hover:underline"
            href="https://www.jasperskc.com/"
          >
            Jaspers
          </a>
        </p>
        <p className="mt-5">
          Dinner Seduction Tips: Sit beside her, order wine, one appetizer, one
          main course, one dessert, more wine.... share everything and feed each
          other.
        </p>

        <p className="mt-5">
          After dinner, go for a gondola ride from{" "}
          <a
            className="text-red-900 hover:underline"
            href="https://www.ambianceonthewater.com/"
          >
            Ambience On The Water
          </a>{" "}
          at the Kansas City Plaza that you reserved in advance.
        </p>
        <p>
          Leave some time after your gondola ride to walk around the plaza
          window shopping and holding hands.
        </p>
        <p className="mt-5">Extra special: Hotel and hot tub, your choice</p>
        <p className="mt-5 float-right">
          romantic, date nights, anniversary, marriage proposal
        </p>
      </div>
    </div>
  );
};

export default romanticitalian;
