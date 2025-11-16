import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center gap-[60px] bg-black z-[2] py-[80px] px-[20px] text-white container"
    >
      <div className="relative z-[1] text-center">
        <h1 className="text-[40px] md:text-[69px] font-medium ">Professional Experience</h1>
        <Image
          src="/theme_pattern.svg"
          alt="Background pattern"
          height={250}
          width={250}
          className="absolute bottom-3 right-0 z-[-1]"
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
    <div className="flex flex-col gap-6 p-8 md:p-10 rounded-[10px] border-2 border-white bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:border-[#ff00ff] transition-all duration-400">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            Frontend Developer
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mt-2">
            Nest Nepal
          </h3>
        </div>
        <div className="text-[#d8d8d8] text-lg md:text-xl">
          Dec 2024 — Present
        </div>
      </div>

      <div className="flex flex-col gap-4 text-[#d4d4d4] text-lg md:text-xl leading-relaxed">
        <p className="text-white font-medium text-xl md:text-2xl mb-2">Key Achievements & Responsibilities:</p>
        <ul className="list-none space-y-3">
          <li className="flex gap-3">
            <span className="text-[#df8908] font-bold">•</span>
            <span>Developed and maintained the official Nest Nepal website using Next.js, ensuring responsive design, fast performance, and SEO optimization</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#df8908] font-bold">•</span>
            <span>Translated Figma UI/UX designs into fully responsive web pages with Tailwind CSS</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#df8908] font-bold">•</span>
            <span>Implemented dynamic routing, API integration, and server-side rendering features using Next.js</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#df8908] font-bold">•</span>
            <span>Improved page load speed and performance through lazy loading, optimized assets, and proper caching</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#df8908] font-bold">•</span>
            <span>Collaborated in an Agile workflow with designers and backend developers for sprint planning and releases</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#df8908] font-bold">•</span>
            <span>Maintained Git-based version control, code reviews, and documentation</span>
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-sm font-medium">Next.js</span>
          <span className="px-4 py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-sm font-medium">React</span>
          <span className="px-4 py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-sm font-medium">Tailwind CSS</span>
          <span className="px-4 py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-sm font-medium">Figma</span>
          <span className="px-4 py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-sm font-medium">REST API</span>
          <span className="px-4 py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-sm font-medium">Git</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
