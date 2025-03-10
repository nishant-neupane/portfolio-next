import Image from "next/image";
import React from "react";

const Services = () => {
  const Services_Data = [
    {
      s_no: "01",
      s_name: "Web design",
      s_desc: "Web development is the process of building, programming...",
    },
    {
      s_no: "02",
      s_name: "Social media",
      s_desc: "Web development is the process of building, programming...",
    },
    {
      s_no: "03",
      s_name: "App design",
      s_desc: "Web development is the process of building, programming...",
    },
  ];

  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center gap-[60px] bg-black z-[2] py-[80px] px-[20px] text-white container"
    >
      <div className="relative z-[1] text-center">
        <h1 className="text-[40px] md:text-[69px] font-medium ">My Services</h1>
        <Image
          src="/theme_pattern.svg"
          alt="Background pattern"
          height={250}
          width={250}
          className="absolute bottom-3 right-0 z-[-1]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] max-w-[1200px] w-full">
        {Services_Data.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col justify-center gap-[20px] p-[40px] rounded-[10px] border-2 border-white transition-all duration-400 cursor-pointer hover:border-[#ff00ff] hover:bg-gradient-to-r from-[#744a0a] to-[#7c2ea0] hover:scale-105">
      <h3 className="text-[25px] font-medium">{service.s_no}</h3>
      <h2 className="text-[35px] font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
        {service.s_name}
      </h2>
      <p className="text-[#d4d4d4] text-[22px] leading-[40px]">
        {service.s_desc}
      </p>
      <div className="flex gap-[10px] items-center mt-[20px]">
        <p>Read More</p>
        <Image
          src="/arrow_icon.svg"
          alt="Arrow icon"
          width={20}
          height={20}
          className="transition-transform duration-300 hover:translate-x-2"
        />
      </div>
    </div>
  );
};

export default Services;
