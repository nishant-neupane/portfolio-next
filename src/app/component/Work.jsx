import Image from "next/image";
import React from "react";

const Work = () => {
  const mywork_data = [
    {
      w_no: 1,
      w_name: "Web design",
      w_img: "/project_1.jpg",
    },
    {
      w_no: 2,
      w_name: "Web design",
      w_img: "/project_1.jpg",
    },
    {
      w_no: 3,
      w_name: "Web design",
      w_img: "/project_1.jpg",
    },
    {
      w_no: 4,
      w_name: "Web design",
      w_img: "/project_1.jpg",
    },
    {
      w_no: 5,
      w_name: "Web design",
      w_img: "/project_1.jpg",
    },
    {
      w_no: 6,
      w_name: "Web design",
      w_img: "/project_1.jpg",
    },
  ];

  return (
    <div
      id="work"
      className="flex flex-col gap-8 items-center justify-center px-4 sm:px-[150px]  bg-black text-white"
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
        {mywork_data.map((work, index) => (
          <ProjectCard key={index} work={work} />
        ))}
      </div>

      <button
        className="group flex gap-4 border-2 border-white rounded-full py-2 px-8 md:py-3 md:px-16 text-xl font-normal mb-20 cursor-pointer transition-all hover:gap-12 duration-500 hover:border-[#ff00ff]"
        aria-label="Show more projects"
      >
        <p>Show More</p>
        <Image
          src="/arrow_icon.svg"
          width={24}
          height={24}
          alt="Arrow icon"
          className="transition-transform duration-300 group-hover:rotate-90 "
        />
      </button>
    </div>
  );
};

const ProjectCard = ({ work }) => {
  return (
    <div className="relative overflow-hidden group">
      <Image
        src={work.w_img}
        width={400}
        height={300}
        alt={work.w_name}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-2xl font-bold">{work.w_name}</p>
      </div>
    </div>
  );
};

export default Work;
