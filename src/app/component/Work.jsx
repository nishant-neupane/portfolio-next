"use client";
import Image from "next/image";
import React, { useState } from "react";

const Work = () => {
  const [showAll, setShowAll] = useState(false);

  const mywork_data = [
    {
      w_no: 1,
      w_name: "Bulk Messaging System",
      w_desc: "An innovative bulk messaging platform enabling efficient mass communication with advanced scheduling, contact management, and delivery tracking features.",
      w_tech: ["Next.js", "React", "Node.js", "MongoDB", "REST API", "WebSockets"],
      w_role: "Full-stack Developer – currently building the complete messaging infrastructure and user interface",
      w_impact: "Enabling scalable bulk communication for businesses",
      w_img: "/project_1.jpg",
      w_github: "https://github.com/nishant-neupane",
      w_status: "In Progress"
    },
    {
      w_no: 2,
      w_name: "Multi-Outlet Restaurant Management System",
      w_desc: "Comprehensive restaurant management solution supporting multiple outlets with centralized inventory, order management, and real-time analytics.",
      w_tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      w_role: "Full-stack Developer – developed multi-tenant architecture, POS integration, and analytics dashboard",
      w_impact: "Streamlined operations across multiple restaurant locations",
      w_img: "/project_2.jpg",
      w_github: "https://github.com/nishant-neupane",
    },
    {
      w_no: 3,
      w_name: "Job Maina (NestNepal)",
      w_desc: "A modern job posting platform built with Next.js and React, focused on streamlined user experience and efficient job listings management.",
      w_tech: ["Next.js", "React", "SCSS", "BEM", "REST API"],
      w_role: "Collaborator – contributed to front-end components, integrated backend APIs, and enhanced UI/UX",
      w_impact: "Improved platform usability and engagement",
      w_img: "/project_1.jpg",
      w_github: "https://github.com/nishant-neupane",
    },
    {
      w_no: 4,
      w_name: "Nest Nepal Website",
      w_desc: "Official website for Nest Nepal built using modern frontend practices with focus on performance, responsiveness, and SEO.",
      w_tech: ["Next.js", "Tailwind CSS", "Figma", "SEO"],
      w_role: "Frontend Developer – developed responsive pages, implemented dynamic content and clean component structure",
      w_impact: "Fast performance and excellent SEO optimization",
      w_img: "/project_2.jpg",
      w_github: "https://github.com/nishant-neupane",
    },
    {
      w_no: 5,
      w_name: "Hotel Management System",
      w_desc: "A full-stack web application using MERN stack for seamless hotel bookings and management.",
      w_tech: ["MongoDB", "Express.js", "React", "Node.js"],
      w_role: "Full-stack Developer – built booking system and user interface",
      w_impact: "30% higher user satisfaction in booking process",
      w_img: "/project_1.jpg",
      w_github: "https://github.com/nishant-neupane",
    },
    {
      w_no: 6,
      w_name: "Real-time Chat System",
      w_desc: "Built with MERN stack and Socket.io for instant messaging, group chats, and file sharing.",
      w_tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      w_role: "Full-stack Developer – implemented real-time communication features",
      w_impact: "Seamless real-time messaging experience",
      w_img: "/project_2.jpg",
      w_github: "https://github.com/nishant-neupane",
    },
    {
      w_no: 7,
      w_name: "Course Management System",
      w_desc: "Java-based system for automating and streamlining college course management processes.",
      w_tech: ["Java", "MySQL", "Swing"],
      w_role: "Developer – automated course registration and management",
      w_impact: "Streamlined college administrative processes",
      w_img: "/project_1.jpg",
      w_github: "https://github.com/nishant-neupane",
    },
  ];

  return (
    <div
      id="work"
      className="flex flex-col gap-8 items-center justify-center px-4 sm:px-[150px]  bg-black text-white container"
    >
      <div className="relative z-[1] text-center">
        <h1 className="text-4xl md:text-6xl font-medium px-8">
          My Latest Work
        </h1>
        <Image
          src="/theme_pattern.svg"
          height={250}
          width={250}
          alt="Background pattern"
          className="absolute bottom-0 right-0 z-[-1]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {(showAll ? mywork_data : mywork_data.slice(0, 3)).map((work, index) => (
          <ProjectCard key={index} work={work} />
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="group flex gap-4 border-2 border-white rounded-full py-2 px-8 md:py-3 md:px-16 text-xl font-normal mb-20 cursor-pointer transition-all hover:gap-12 duration-500 hover:border-[#ff00ff]"
        aria-label={showAll ? "Show less projects" : "Show more projects"}
      >
        <p>{showAll ? "Show Less" : "Show More"}</p>
        <Image
          src="/arrow_icon.svg"
          width={24}
          height={24}
          alt="Arrow icon"
          className={`transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:rotate-90"}`}
        />
      </button>
    </div>
  );
};

const ProjectCard = ({ work }) => {
  return (
    <div className="relative overflow-hidden group border-2 border-white rounded-lg hover:border-[#ff00ff] transition-all duration-300">
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={work.w_img}
          width={400}
          height={300}
          alt={work.w_name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
        {work.w_status && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-full text-white text-xs font-bold">
            {work.w_status}
          </div>
        )}
      </div>

      <div className="p-6 bg-[#0a0a0a]">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent mb-2">
          {work.w_name}
        </h3>
        <p className="text-[#d4d4d4] text-sm leading-relaxed mb-4">
          {work.w_desc}
        </p>

        {work.w_role && (
          <p className="text-[#a0a0a0] text-xs italic mb-3">
            {work.w_role}
          </p>
        )}

        {work.w_impact && (
          <p className="text-[#df8908] text-sm font-medium mb-4">
            ⚡ {work.w_impact}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {work.w_tech && work.w_tech.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-[#1a1a1a] text-white text-xs rounded border border-[#3a3a3a]">
              {tech}
            </span>
          ))}
        </div>

        {work.w_github && (
          <a
            href={work.w_github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-[#df8908] transition-colors duration-300"
          >
            <span className="text-sm">View on GitHub</span>
            <Image
              src="/arrow_icon.svg"
              width={16}
              height={16}
              alt="Arrow"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default Work;
