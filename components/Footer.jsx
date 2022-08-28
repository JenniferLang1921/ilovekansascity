import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import FooterLogo from "../public/assets/Kansas_City_love_white-06.png";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-2 border-b-2 border-gray-600 py-8">
        <div>
          <Link href="/">
            <a>
              <Image
                src={FooterLogo}
                alt="/"
                width="203"
                height="54"
                className="cursor-pointer"
              />
            </a>
          </Link>
          <ul>
            <li className="py-1 hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="py-1 hover:underline">
              <Link href="/thingstodoinkc">Things to Do in KC</Link>
            </li>
            <li className="py-1 hover:underline">
              <Link href="/restaurants">Restaurants</Link>
            </li>
            <li className="py-1 hover:underline">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="py-1 hover:underline">
              <Link href="/kceventsthisweekend">KC Events This Weekend</Link>
            </li>
          </ul>
        </div>

        <div className="pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Not working yet"
            />
            <button className="p-2 mb-4 hover:bg-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p> 2022 I Love KC. All rights reserved</p>
        <div className="flex justify-between sm:w-[75px] pt-4 text-2xl">
          <a href="https://www.facebook.com/lovingkansascity">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/livelovekansascity/">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
