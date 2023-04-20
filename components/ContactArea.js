import Image from "next/image";
import React from "react";
import ContactShape from "../public/contact-shape-image.png";
import { FaEnvelope, FaPhoneAlt, FaSkype, FaBehance, FaFacebookF, FaDribbble, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ContactForm from "./ContactForm";
const ContactArea = () => {
  return (
    <div id="contact" className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap gap-6 items-center">
          <div className="w-full md:w-5/12">
            <h2 className="text-4xl md:text-6xl lg:text-[84px] lg:leading-[84px] font-extrabold uppercase text-white">
              Get <br /> in touch
            </h2>
            <div className="text-cener mb-4">
              <Image className="mx-auto" src={ContactShape} alt="shape" />
            </div>
            <ul className="space-y-4">
              <li className="flex gap-x-4 items-center text-base text-white"><FaEnvelope /> <span>contact@uxzia.com</span></li>
              <li className="flex gap-x-4 items-center text-base text-white"><FaPhoneAlt /> <span>+968 253 253 63</span></li>
              <li className="flex gap-x-4 items-center text-base text-white"><FaSkype /> <span>contact@uxzia.com</span></li>
            </ul>
            <ul className="flex gap-x-4 mt-10">
              <li><a className="flex items-center justify-center w-10 h-10 rounded-full border border-[#3D3D3D] text-white text-center" href="#" target="_blank"><FaBehance /></a></li>
              <li><a className="flex items-center justify-center w-10 h-10 rounded-full border border-[#3D3D3D] text-white text-center" href="#" target="_blank"><FaFacebookF /></a></li>
              <li><a className="flex items-center justify-center w-10 h-10 rounded-full border border-[#3D3D3D] text-white text-center" href="#" target="_blank"><FaDribbble /></a></li>
              <li><a className="flex items-center justify-center w-10 h-10 rounded-full border border-[#3D3D3D] text-white text-center" href="#" target="_blank"><FaInstagram /></a></li>
              <li><a className="flex items-center justify-center w-10 h-10 rounded-full border border-[#3D3D3D] text-white text-center" href="#" target="_blank"><FaLinkedinIn /></a></li>
              <li><a className="flex items-center justify-center w-10 h-10 rounded-full border border-[#3D3D3D] text-white text-center" href="#" target="_blank"><FaTwitter /></a></li>
            </ul>
          </div>
          <div className="w-full md:w-6/12 md:ml-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-3">Let’s start a project...</h2>
              <p className="text-base text-white">Connect with Me and Let s Create Something Amazing</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
