import React from "react";

const Footer = () => {
  return (
    <div className="px-6 py-10 lg:px-40 flex flex-col gap-6 bg-black text-white">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col gap-5 max-w-md text-center lg:text-left">
          <img src="/logo.svg" alt="Footer Logo" className="mx-auto lg:mx-0" />
          <p className="text-base md:text-lg text-[#d8d8d8]">
            I am an IT student passionate about problem-solving and innovation.
            Proficient in JavaScript (MERN), with hands-on experience developing
            management systems that enhance efficiency and user satisfaction.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-5 w-full lg:w-auto">
          <div className="flex items-center gap-3 p-4 lg:p-5 w-full lg:w-auto rounded-full bg-[#32323b] hover:border-2 hover:border-white transition-all">
            <img src="/user_icon.svg" alt="User Icon" className="w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none border-none text-[#a0a0a0] text-sm lg:text-base w-full"
            />
          </div>

          <button className="text-sm md:text-lg px-6 py-3 md:px-10 md:py-4 lg:px-14 lg:py-5 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] hover:scale-105 transition-transform duration-300">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-[#32323b]" />

      <div className="flex flex-col lg:flex-row justify-between gap-5 text-center lg:text-left text-sm md:text-base">
        <p className="text-[#d8d8d8]">
          © 2024 Nishant Neupane. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-5 lg:gap-10">
          <p className="text-[#d8d8d8] cursor-pointer hover:underline">
            Terms of Service
          </p>
          <p className="text-[#d8d8d8] cursor-pointer hover:underline">
            Privacy Policy
          </p>
          <p className="text-[#d8d8d8] cursor-pointer hover:underline">
            Connect With Me
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
