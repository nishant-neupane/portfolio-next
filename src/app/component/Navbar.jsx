"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Image imports
const logo = "/logo.svg";
const underline = "/nav_underline.svg";
const menuOpen = "/menu_open.svg";
const menuClose = "/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
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

  const openMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close the menu when clicking or scrolling outside
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
        {/* Logo */}
        <Image src={logo} alt="Logo" width={100} height={100} />

        {/* Mobile Menu Icon */}
        <Image
          src={menuOpen}
          onClick={openMenu}
          alt="Open Menu"
          width={24}
          height={24}
          className="block md:hidden fixed right-[30px] cursor-pointer"
        />

        {/* Desktop Navigation */}
        <ul className="md:flex items-center gap-10 hidden md:visible text-white">
          {["home", "about", "services", "work", "contact"].map((item) => (
            <li key={item} className="flex flex-col gap-1 cursor-pointer">
              <AnchorLink className="text-white no-underline" href={`#${item}`}>
                <p onClick={() => setMenu(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              </AnchorLink>
              {menu === item && (
                <Image src={underline} alt="Underline" width={64} height={64} />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Menu */}
        <ul
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-[350px] bg-black bg-opacity-90 backdrop-blur-md transition-transform duration-500 ease-in-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Image
            src={menuClose}
            onClick={closeMenu}
            alt="Close Menu"
            width={24}
            height={24}
            className="relative top-[30px] left-[290px] cursor-pointer"
          />

          {["home", "about", "services", "work", "contact"].map((item) => (
            <li
              key={item}
              className="flex flex-col gap-1 cursor-pointer mt-10 ml-10"
            >
              <AnchorLink className="text-white no-underline" href={`#${item}`}>
                <p
                  onClick={() => {
                    setMenu(item);
                    closeMenu();
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              </AnchorLink>
              {menu === item && (
                <Image src={underline} alt="Underline" width={64} height={64} />
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="px-10 py-3 rounded-full bg-gradient-to-r from-[#da7c25] to-[#b923e1] text-white text-base cursor-pointer transition-transform duration-500 hover:scale-105 hidden md:block">
          <div
            className="text-white no-underline"
            onClick={handleDownload}
          >
            My Resume
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
