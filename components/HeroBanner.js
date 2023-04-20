import Image from "next/image";
import React from "react";
import heroBannerImage from "public/hero-banner-image.png";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
const HeroBannerBg = "hero-banner-bg.jpg";
const HeroBanner = () => {
  return (
    <div
      id="top"
      className="pt-[120px] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${HeroBannerBg})` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-between pb-16 lg:pb-20 order-last md:order-first">
            <h1 className="text-5xl sm:text-7xl text-white font-extrabold">
              Zia Uddin Roman
            </h1>
            <div className="mt-10 lg:mt-20">
              <h4 className="text-sl sm:text-2xl font-semibold text-[#F5F5F5] mb-4">
                Expert in
              </h4>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-10">
                UX/UI Designer
              </h2>
              <Link
                className="min-w-[140px] px-4 h-[60px] inline-flex justify-center items-center border border-[#B8B8B8] text-center rounded-[40px] text-lg font-semibold capitalize text-white"
                href="/"
              >
                My work
              </Link>
            </div>
          </div>
          <div className="order-first md:order-last relative">
            <Image
              className="w-full object-cover"
              src={heroBannerImage}
              alt="hero banner"
            />
            <ul className="social-media items-center absolute left-0 top-0 w-full h-full text-lg text-[#707070] sm:space-y-4 px-4 mt-10 gap-x-4">
              <li className="absolute">
                <a
                  href="#"
                  target="_blank"
                  className="transition-all hover:text-white w-10 h-10 rounded-full flex items-center justify-center bg-white/20 text-[#CCCCCC] social-media-shadow"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="absolute">
                <a
                  href="#"
                  target="_blank"
                  className="transition-all hover:text-white w-10 h-10 rounded-full flex items-center justify-center bg-white/20 text-[#CCCCCC] social-media-shadow"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="absolute">
                <a
                  href="#"
                  target="_blank"
                  className="transition-all hover:text-white w-10 h-10 rounded-full flex items-center justify-center bg-white/20 text-[#CCCCCC] social-media-shadow"
                >
                  <FaBehance />
                </a>
              </li>
              <li className="absolute">
                <a
                  href="#"
                  target="_blank"
                  className="transition-all hover:text-white w-10 h-10 rounded-full flex items-center justify-center bg-white/20 text-[#CCCCCC] social-media-shadow"
                >
                  <FaDribbble />
                </a>
              </li>
              <li className="absolute">
                <a
                  href="#"
                  target="_blank"
                  className="transition-all hover:text-white w-10 h-10 rounded-full flex items-center justify-center bg-white/20 text-[#CCCCCC] social-media-shadow"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="absolute">
                <a
                  href="#"
                  target="_blank"
                  className="transition-all hover:text-white w-10 h-10 rounded-full flex items-center justify-center bg-white/20 text-[#CCCCCC] social-media-shadow"
                >
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
