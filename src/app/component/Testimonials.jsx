import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Tech Lead, Nest Nepal",
      text: "Nishant consistently delivers pixel-perfect implementations from Figma designs. His understanding of Next.js server components and client-side optimization has significantly improved our web app performance. A reliable team player who takes initiative.",
      rating: 5,
    },
    {
      name: "Sarah Mitchell",
      role: "Product Manager, Tech Startup",
      text: "Working with Nishant on our restaurant management platform was seamless. He proactively identified UX issues and proposed elegant solutions. His code is clean, well-documented, and maintainable—exactly what we needed.",
      rating: 5,
    },
    {
      name: "Amit Sharma",
      role: "Senior Full-Stack Developer",
      text: "Nishant's frontend expertise in React and Tailwind CSS is impressive. He quickly adapted to our codebase, implemented responsive designs efficiently, and his Git workflow is professional. Great addition to any development team.",
      rating: 5,
    },
  ];

  return (
    <div
      id="testimonials"
      className="flex flex-col items-center justify-center gap-[60px] bg-black z-[2] py-[80px] px-[20px] text-white container"
    >
      <div className="relative z-[1] text-center">
        <h1 className="text-[40px] md:text-[69px] font-medium">What Others Say</h1>
        <Image
          src="/theme_pattern.svg"
          alt="Background pattern"
          height={250}
          width={250}
          className="absolute bottom-3 right-0 z-[-1]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col gap-4 p-8 rounded-lg border-2 border-white bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:border-[#ff00ff] hover:scale-105 transition-all duration-300">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-2">
        {[...Array(testimonial.rating)].map((_, index) => (
          <span key={index} className="text-[#df8908] text-xl">★</span>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-[#d4d4d4] text-base leading-relaxed italic">
        &quot;{testimonial.text}&quot;
      </p>

      {/* Author Info */}
      <div className="mt-4 pt-4 border-t border-[#3a3a3a]">
        <h4 className="text-white text-lg font-bold">{testimonial.name}</h4>
        <p className="text-[#a0a0a0] text-sm">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default Testimonials;
