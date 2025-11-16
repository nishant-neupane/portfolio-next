import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-[60px] bg-black z-[2] py-10 sm:py-16 md:py-20 lg:py-[80px] px-4 sm:px-6 md:px-[20px] text-white container"
    >
      <div className="relative z-[1] text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[69px] font-medium px-4">Professional Experience</h1>
        <Image
          src="/theme_pattern.svg"
          alt="Background pattern"
          height={250}
          width={250}
          className="absolute bottom-3 right-0 z-[-1] hidden md:block"
        />
      </div>

      <div className="max-w-[1000px] w-full">
        <ExperienceCard />
      </div>
    </div>
  );
};

const ExperienceCard = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 p-4 sm:p-6 md:p-8 lg:p-10 rounded-[10px] border-2 border-white bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:border-[#ff00ff] transition-all duration-400">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 sm:gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            Frontend Developer
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-1 sm:mt-2">
            Nest Nepal
          </h3>
        </div>
        <div className="text-[#d8d8d8] text-base sm:text-lg md:text-xl">
          Dec 2024 — Present
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 text-[#d4d4d4] text-base sm:text-lg md:text-xl leading-relaxed">
        <p className="text-white font-medium text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Key Achievements & Responsibilities:</p>
        <ul className="list-none space-y-2 sm:space-y-3">
          <li className="flex gap-2 sm:gap-3">
            <span className="text-[#df8908] font-bold flex-shrink-0">•</span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Developed and maintained the official Nest Nepal website using Next.js, ensuring responsive design, fast performance, and SEO optimization</span>
          </li>
          <li className="flex gap-2 sm:gap-3">
            <span className="text-[#df8908] font-bold flex-shrink-0">•</span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Translated Figma UI/UX designs into fully responsive web pages with Tailwind CSS</span>
          </li>
          <li className="flex gap-2 sm:gap-3">
            <span className="text-[#df8908] font-bold flex-shrink-0">•</span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Implemented dynamic routing, API integration, and server-side rendering features using Next.js</span>
          </li>
          <li className="flex gap-2 sm:gap-3">
            <span className="text-[#df8908] font-bold flex-shrink-0">•</span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Improved page load speed and performance through lazy loading, optimized assets, and proper caching</span>
          </li>
          <li className="flex gap-2 sm:gap-3">
            <span className="text-[#df8908] font-bold flex-shrink-0">•</span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Collaborated in an Agile workflow with designers and backend developers for sprint planning and releases</span>
          </li>
          <li className="flex gap-2 sm:gap-3">
            <span className="text-[#df8908] font-bold flex-shrink-0">•</span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Maintained Git-based version control, code reviews, and documentation</span>
          </li>
        </ul>

        <div className="mt-2 sm:mt-3 md:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-xs sm:text-sm font-medium">Next.js</span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-xs sm:text-sm font-medium">React</span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-xs sm:text-sm font-medium">Tailwind CSS</span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-xs sm:text-sm font-medium">Figma</span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-xs sm:text-sm font-medium">REST API</span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-xs sm:text-sm font-medium">Git</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
