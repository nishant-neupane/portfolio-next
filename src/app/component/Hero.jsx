"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
const profileImg = "/mine1.png";

import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {



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
    <div ref={refs.container} className="relative bg-black container">
      <div className="flex justify-center items-center min-h-screen ">
        <div
          id="home"
          className="flex flex-row items-center gap-8 p-5 text-left max-w-6xl w-full"
        >
          <div className="flex flex-col gap-8 flex-1">
            <h1 className=" text-4xl space-y-4 md:text-6xl font-semibold ">
              <span className="text-gradient">
                I&apos;m, <br /> Nishant Neupane,
              </span>{" "}
              <span className="anim-typewriter line-1 ">
                Frontend Developer
              </span>
            </h1>
            <p className="text-lg leading-10 text-white ">
              Frontend Developer with 10+ months of hands-on experience in building responsive and performant applications using Next.js, React, and Tailwind CSS. Skilled in translating UI/UX designs into functional web components and integrating REST APIs. Eager to contribute to collaborative, fast-paced teams and build user-centered digital experiences.
            </p>
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
        className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 text-white bg-black/70 pt-[100px] "
      >
        <div>
          <section className="relative text-white">
            <div
              id="about"
              className="flex flex-col items-center justify-center gap-8 my-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[35%_65%] gap-8">
                <div className="hidden sm:flex justify-start items-start">
                  <Image
                    src="/about_profile.png"
                    alt="profile"
                    height={350}
                    width={350}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-16">
                  <div className="flex flex-col gap-8">
                    <p className="text-xl sm:text-2xl leading-relaxed ">
                      Frontend Developer with 10+ months of professional experience specializing in Next.js, React, and Tailwind CSS. I transform UI/UX designs into responsive, high-performance web applications that deliver exceptional user experiences.
                    </p>
                    <p className="text-xl sm:text-2xl leading-relaxed">
                      Currently working on an innovative bulk messaging system while maintaining expertise in multi-outlet restaurant management solutions. Strong problem-solving skills combined with excellent communication and adaptability in remote environments.
                    </p>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-12">
                      <p className="text-xl w-40">Next.js</p>
                      <hr className="w-4/5 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
                    </div>
                    <div className="flex items-center gap-12">
                      <p className="text-xl w-40">React JS</p>
                      <hr className="w-4/5 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
                    </div>
                    <div className="flex items-center gap-12">
                      <p className="text-xl w-40">Tailwind CSS</p>
                      <hr className="w-3/4 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
                    </div>
                    <div className="flex items-center gap-12">
                      <p className="text-xl w-40">JavaScript</p>
                      <hr className="w-4/5 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
                    </div>
                    <div className="flex items-center gap-12  ">
                      <p className="text-xl w-40">UI/UX Design</p>
                      <hr className="w-3/5 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="flex justify-around w-full my-16">
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    10+
                  </h1>
                  <p className="text-xl">MONTHS OF EXPERIENCE</p>
                </div>
                <hr className="h-20 border-l-2 border-gray-300 mx-8" />
                <div className="flex flex-col items-center gap-4">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    7+
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
