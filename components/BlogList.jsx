import Image from "next/image";
import Link from "next/link";

import RomanticRoses from "../public/assets/blogImgs/romantic_roses.jpg";

const BlogList = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="grid md:grid-cols-3 gap-20 px-2 py-10 text-center">
        <div className="border py-8 mt-2 rounded-xl text-red-900 shadow-xl hover:text-white hover:bg-red-900">
          <p className="text-2xl">
            <Link href="/romanticitalian">
              <a>
                <h3>Ooh La La Italian </h3>
              </a>
            </Link>
          </p>
        </div>

        <div className="border py-8 mt-2 rounded-xl text-red-900 shadow-xl hover:text-white hover:bg-red-900">
          <p className="text-2xl ">
            <Link href="/shawneemissionlake">
              <a>
                <h3>Hiking At Shawnee Mission Lake</h3>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
