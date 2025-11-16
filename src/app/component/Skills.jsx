import Image from "next/image";
import React from "react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend Development",
      skills: ["HTML5", "CSS3", "SCSS", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend Basics",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST API"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "Figma", "WordPress", "Socket.io", "Responsive Web Design"],
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Adaptability",
    "Time Management",
    "Agile Methodologies",
  ];

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center gap-[60px] bg-black z-[2] py-[80px] px-[20px] text-white container"
    >
      <div className="relative z-[1] text-center">
        <h1 className="text-[40px] md:text-[69px] font-medium">Technical & Soft Skills</h1>
        <Image
          src="/theme_pattern.svg"
          alt="Background pattern"
          height={250}
          width={250}
          className="absolute bottom-3 right-0 z-[-1]"
        />
      </div>

      <div className="max-w-[1200px] w-full">
        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalSkills.map((skillGroup, index) => (
              <SkillCard key={index} skillGroup={skillGroup} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            Soft Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] border-2 border-white rounded-full hover:border-[#ff00ff] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span className="text-white text-lg font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skillGroup }) => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-lg border-2 border-white bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:border-[#ff00ff] transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-2">{skillGroup.category}</h3>
      <div className="flex flex-wrap gap-2">
        {skillGroup.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-2 bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded text-white text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
