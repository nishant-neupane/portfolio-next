import Image from "next/image";
import React from "react";

const Achievements = () => {
  const achievements = [
    {
      title: "Performance Optimization",
      description: "Improved page load time by 40% through code splitting, lazy loading, and image optimization techniques",
      icon: "⚡",
    },
    {
      title: "Production Deployment",
      description: "Successfully deployed and maintained 7+ production applications with 99.9% uptime",
      icon: "🚀",
    },
    {
      title: "Code Quality",
      description: "Maintained high code quality standards with comprehensive testing and code reviews",
      icon: "✨",
    },
    {
      title: "Agile Development",
      description: "Contributed to sprint planning, daily standups, and delivered features on schedule",
      icon: "🎯",
    },
  ];

  const certifications = [
    {
      name: "React & Next.js Specialist",
      issuer: "Self-Certified through Production Experience",
      year: "2024",
    },
    {
      name: "Responsive Web Design",
      issuer: "Practical Implementation",
      year: "2023",
    },
    {
      name: "Git & Version Control",
      issuer: "Professional Experience",
      year: "2023",
    },
  ];

  return (
    <div
      id="achievements"
      className="flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-[60px] bg-black z-[2] py-10 sm:py-16 md:py-20 lg:py-[80px] px-4 sm:px-6 md:px-[20px] text-white container"
    >
      <div className="relative z-[1] text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[69px] font-medium px-4">Achievements & Recognition</h1>
        <Image
          src="/theme_pattern.svg"
          alt="Background pattern"
          height={250}
          width={250}
          className="absolute bottom-3 right-0 z-[-1] hidden md:block"
        />
      </div>

      <div className="max-w-[1200px] w-full">
        {/* Key Achievements */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg border-2 border-white bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:border-[#ff00ff] hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-3xl sm:text-4xl flex-shrink-0">{achievement.icon}</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{achievement.title}</h3>
                </div>
                <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            Professional Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 rounded-lg border-2 border-white bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] hover:border-[#ff00ff] transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{cert.name}</h3>
                <p className="text-[#a0a0a0] text-xs sm:text-sm">{cert.issuer}</p>
                <p className="text-[#df8908] text-base sm:text-lg font-semibold">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Highlights */}
        <div className="mt-10 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 rounded-lg border-2 border-[#df8908] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-5 md:mb-6 text-white">
            Professional Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent mb-1 sm:mb-2">
                10+
              </p>
              <p className="text-[#d4d4d4] text-sm sm:text-base md:text-lg">Months Professional Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent mb-1 sm:mb-2">
                7+
              </p>
              <p className="text-[#d4d4d4] text-sm sm:text-base md:text-lg">Production Projects</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent mb-1 sm:mb-2">
                100%
              </p>
              <p className="text-[#d4d4d4] text-sm sm:text-base md:text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
