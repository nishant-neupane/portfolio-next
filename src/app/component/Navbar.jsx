"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

const logo = "/logo1.svg";
const underline = "/nav_underline.svg";
const menuOpen = "/menu_open.svg";
const menuClose = "/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const menuRef = useRef(null);

  const handleDownload = () => {
    if (isDownloading) return;

    try {
      setIsDownloading(true);

      const fileUrl =
        "https://drive.google.com/uc?export=download&id=1QncGLfIvzQG2HNv-YvTp6JPxA2zeSamB";

      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "resume_nishant_neupane.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setIsDownloading(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to download resume:", error);
      setIsDownloading(false);
    }
  };

  const openMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      closeMenu();
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleScroll, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between my-5 mx-6 lg:mx-20 text-base">
        <div className="flex justify-center items-center gap-1">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <p className="text-gradient text-2xl font-[700]">ishant</p>
        </div>

        <Image
          src={menuOpen}
          onClick={openMenu}
          alt="Open Menu"
          width={24}
          height={24}
          className="block md:hidden fixed right-[30px] cursor-pointer"
        />

        <ul className="md:flex items-center gap-10 hidden md:visible text-white">
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink
              className="text-white no-underline"
              offset={1800}
              href="#home"
            >
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" && (
              <Image src={underline} alt="Underline" width={64} height={64} />
            )}
          </li>
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink
              className="text-white no-underline"
              offset={120}
              href="#about"
            >
              <p onClick={() => setMenu("about")}>About</p>
            </AnchorLink>
            {menu === "about" && (
              <Image src={underline} alt="Underline" width={64} height={64} />
            )}
          </li>
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink className="text-white no-underline" href="#experience">
              <p onClick={() => setMenu("experience")}>Experience</p>
            </AnchorLink>
            {menu === "experience" && (
              <Image src={underline} alt="Underline" width={64} height={64} />
            )}
          </li>
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink className="text-white no-underline" href="#skills">
              <p onClick={() => setMenu("skills")}>Skills</p>
            </AnchorLink>
            {menu === "skills" && (
              <Image src={underline} alt="Underline" width={64} height={64} />
            )}
          </li>
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink
              className="text-white no-underline"
              offset={110}
              href="#work"
            >
              <p onClick={() => setMenu("work")}>Projects</p>
            </AnchorLink>
            {menu === "work" && (
              <Image src={underline} alt="Underline" width={64} height={64} />
            )}
          </li>
          <li className="flex flex-col gap-1 cursor-pointer">
            <AnchorLink
              className="text-white no-underline"
              offset={110}
              href="#contact"
            >
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" && (
              <Image src={underline} alt="Underline" width={64} height={64} />
            )}
          </li>
        </ul>

        <div
          className={`px-10 py-3 rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1] text-white text-base transition-transform duration-500 hidden md:block ${
            isDownloading
              ? "pointer-events-none opacity-70"
              : "cursor-pointer hover:scale-105"
          }`}
          onClick={handleDownload}
        >
          <div className="text-white no-underline select-none">
            {isDownloading ? "Downloading..." : "My Resume"}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-l-2 border-[#b923e1] z-50 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <Image
            src={menuClose}
            onClick={closeMenu}
            alt="Close Menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>

        <ul className="flex flex-col gap-6 px-8 text-white">
          <li>
            <AnchorLink
              className="text-white no-underline text-xl hover:text-[#df8908] transition-colors"
              offset={180}
              href="#home"
              onClick={closeMenu}
            >
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="text-white no-underline text-xl hover:text-[#df8908] transition-colors"
              offset={120}
              href="#about"
              onClick={closeMenu}
            >
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="text-white no-underline text-xl hover:text-[#df8908] transition-colors"
              href="#experience"
              onClick={closeMenu}
            >
              Experience
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="text-white no-underline text-xl hover:text-[#df8908] transition-colors"
              href="#skills"
              onClick={closeMenu}
            >
              Skills
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="text-white no-underline text-xl hover:text-[#df8908] transition-colors"
              offset={110}
              href="#work"
              onClick={closeMenu}
            >
              Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="text-white no-underline text-xl hover:text-[#df8908] transition-colors"
              offset={110}
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </AnchorLink>
          </li>

          <li className="mt-6">
            <div
              className={`px-8 py-3 rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1] text-white text-center ${
                isDownloading
                  ? "pointer-events-none opacity-70"
                  : "cursor-pointer hover:scale-105"
              }`}
              onClick={handleDownload}
            >
              {isDownloading ? "Downloading..." : "My Resume"}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
