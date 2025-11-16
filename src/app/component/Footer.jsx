"use client";
import Image from "next/image";
import React from "react";
const logo = "/logo1.svg";

const Footer = () => {
  return (
    <div className="px-6 py-10 lg:px-40 flex flex-col gap-6 bg-black text-white container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-5 max-w-md text-center lg:text-left">
          <div className="flex justify-center md:justify-start items-center  gap-1">
            <Image src={logo} alt="Logo" width={50} height={50} />
            <p className="text-gradient text-2xl font-[700]">ishant</p>
          </div>
          <p className="text-base md:text-lg text-[#d8d8d8]">
            Frontend Developer with 10+ months of hands-on experience in Next.js, React, and Tailwind CSS.
            Passionate about building responsive, performant web applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-center lg:text-right">
          <p className="text-lg font-semibold text-white">Get In Touch</p>
          <a
            href="mailto:nishantneupane488@gmail.com"
            className="text-[#d8d8d8] hover:text-[#df8908] transition-colors"
          >
            nishantneupane488@gmail.com
          </a>
          <a
            href="tel:+9779840033587"
            className="text-[#d8d8d8] hover:text-[#df8908] transition-colors"
          >
            +977 9840033587
          </a>
        </div>
      </div>

      <hr className="border-[#32323b]" />

      <div className="flex flex-col lg:flex-row justify-between gap-5 text-center lg:text-left text-sm md:text-base">
        <p className="text-[#d8d8d8]">
          © 2025 Nishant Neupane. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-5 lg:gap-10">
          <a href="https://github.com/nishant-neupane" target="_blank" rel="noopener noreferrer" className="text-[#d8d8d8] cursor-pointer hover:text-[#df8908] transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nishant-neupane" target="_blank" rel="noopener noreferrer" className="text-[#d8d8d8] cursor-pointer hover:text-[#df8908] transition-colors">
            LinkedIn
          </a>
          <a href="mailto:nishantneupane488@gmail.com" className="text-[#d8d8d8] cursor-pointer hover:text-[#df8908] transition-colors">
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
