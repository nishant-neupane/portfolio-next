"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
const profileImg = "/mine1.png";

import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const handleDownload = () => {
    try {
      const fileUrl =
        "https://drive.google.com/uc?export=download&id=1pO6-cPlQtxCoMAoA1_gGHlBu3V4umXjt";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download resume:", error);
    }
  };

  const services = [
    {
      id: "01",
      title: "Web design",
      description:
        "I specialize in creating visually captivating and functional websites that make a strong first impression. With a focus on cohesive visual language, I craft designs that align with your brand and engage your audience.",
    },
    {
      id: "02",
      title: "Webflow development",
      description:
        "As a Webflow Partner, I am proficient in leveraging this powerful tool to build engaging, high-performance websites that are tailored to your specific needs—ensuring that each site is not just visually appealing but also robust, scalable, and easy to manage.",
    },
    {
      id: "03",
      title: "Animation & interaction",
      description:
        "Animations and interactions are crucial for creating dynamic and engaging digital experiences. I utilize the latest tools to design and implement rich interactive elements, from subtle movements to complex animations.",
    },
  ];

  const refs = {
    container: useRef(null),
    mask: useRef(null),
    aboutText: useRef(null),
    textDiv: useRef(null),
    serviceRefs: useRef([]),
    idRefs: useRef([]),
    titleRefs: useRef([]),
  };

  useEffect(() => {
    if (!refs.container.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: refs.container.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .fromTo(
          refs.mask.current,
          { scaleY: 0 },
          { scaleY: 1, ease: "power2.inOut" }
        )
        .fromTo(
          refs.aboutText.current,
          { opacity: 0, scale: 1 },
          { opacity: 1, scale: 1.1, ease: "power2.inOut" },
          0.125
        )
        .fromTo(
          refs.textDiv.current,
          { opacity: 0.5, y: 1000 },
          { opacity: 1, y: 0, ease: "power2.out" },
          "+=0.075"
        );

      refs.serviceRefs.current.forEach((serviceRef, index) => {
        const idRef = refs.idRefs.current[index];
        const titleRef = refs.titleRefs.current[index];

        timeline.fromTo(
          serviceRef,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, ease: "power2.inOut" },
          "-=0.5"
        );

        timeline.fromTo(
          idRef,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, ease: "power2.inOut" },
          "-=0.5"
        );

        if (titleRef) {
          const text = titleRef.innerText;
          titleRef.innerText = "";
          const words = text.split(" ");
          const letters = words.map((word, index) => {
            const wordSpans = word.split("").map((char) => {
              const span = document.createElement("span");
              span.innerText = char;
              span.style.opacity = 0;
              span.style.display = "inline-block";
              titleRef.appendChild(span);
              return span;
            });

            if (index < words.length - 1) {
              const spaceSpan = document.createElement("span");
              spaceSpan.style.display = "inline-block";
              spaceSpan.style.width = "10px";
              titleRef.appendChild(spaceSpan);
            }

            return wordSpans;
          });

          const allLetters = letters.flat();

          timeline.to(
            allLetters,
            { opacity: 1, stagger: 0.05, ease: "power2.out" },
            "-=0.5"
          );
        }
      });
    }, refs.container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={refs.container} className="relative">
      <div className="flex justify-center items-center min-h-screen">
        <div
          id="home"
          className="flex flex-row items-center gap-8 p-5 text-left max-w-6xl w-full"
        >
          <div className="flex flex-col gap-2 flex-1">
            <h1 className=" text-4xl md:text-5xl font-semibold ">
              <span className="text-gradient">I&apos;m Nishant Neupane,</span>{" "}
              <span className="anim-typewriter line-1 max-w-[529px]">
                MERN Stack Developer
              </span>
            </h1>
            <p className="text-lg leading-10">
              I am an IT student passionate about problem-solving and
              innovation. Proficient in JavaScript (MERN), with hands-on
              experience developing management systems that enhance efficiency
              and user satisfaction.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 text-xl  font-medium mt-6">
              <div className="hero-connect">
                <AnchorLink offset={50} href="#contact">
                  Connect with me
                </AnchorLink>
              </div>
              <div className="hero-resume" onClick={handleDownload}>
                My Resume
              </div>
            </div>
          </div>

          <div className="flex-1 hidden md:flex justify-end">
            <Image
              src={profileImg}
              height={400}
              width={400}
              alt="Profile Image"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div
          ref={refs.mask}
          className="h-full w-full bg-black origin-center "
        />
        <h1
          ref={refs.aboutText}
          className="text-white text-[22cqw] font-bold opacity-0 absolute font-montserrat"
        >
          𝕬𝖇𝖔𝖚𝖙
        </h1>
      </div>

      <div
        ref={refs.textDiv}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 text-white bg-black/50 pt-[100px] "
      >
        <div>
          <section className="relative text-white">
            <div
              id="about"
              className="flex flex-col items-center justify-center gap-16 my-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[25%_75%] gap-16">
                <div className="hidden sm:block">
                  <img
                    src="/about_profile.png"
                    alt="profile"
                    className="h-96 w-80 object-cover"
                  />
                </div>

                <div className="flex flex-col gap-16">
                  <div className="flex flex-col gap-8">
                    <p className="text-xl sm:text-2xl leading-relaxed">
                      IT student passionate about problem-solving and
                      innovation. Proficient in Java and JavaScript (MERN), with
                      hands-on experience developing management systems that
                      enhance efficiency and user satisfaction.
                    </p>
                    <p className="text-xl sm:text-2xl leading-relaxed">
                      A fast learner and strong team player with excellent
                      communication skills, eager to contribute and grow in the
                      IT industry.
                    </p>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-12">
                      <p className="text-xl w-40">HTML & CSS</p>
                      <hr className="w-1/2 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
                    </div>
                    <div className="flex items-center gap-12">
                      <p className="text-xl w-40">React JS</p>
                      <hr className="w-3/5 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
                    </div>
                    <div className="flex items-center gap-12">
                      <p className="text-xl w-40">JavaScript</p>
                      <hr className="w-1/2 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
                    </div>
                    <div className="flex items-center gap-12  ">
                      <p className="text-xl w-40">Node JS</p>
                      <hr className="w-3/4 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="flex justify-around w-full my-16">
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    6+
                  </h1>
                  <p className="text-xl">MONTHS OF EXPERIENCE</p>
                </div>
                <hr className="h-20 border-l-2 border-gray-300 mx-8" />
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    4+
                  </h1>
                  <p className="text-xl">PROJECTS COMPLETED</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
