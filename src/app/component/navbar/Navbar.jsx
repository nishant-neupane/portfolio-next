"use client";
import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("nav")) {
        closeMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("scroll", closeMenu);
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", closeMenu);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", closeMenu);
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-lg shadow-md">
      <div className="flex items-center justify-between py-4 px-6 lg:px-20">
        {/* Mobile Menu Button - Now on the left */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Logo - Now on the right for mobile */}
        <img src="/logo.svg" alt="Logo" className="h-10 md:order-1" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          {menuItems.map((item) => (
            <li key={item.name} className="relative cursor-pointer">
              <AnchorLink
                className="hover:text-gray-300 transition"
                href={item.href}
                onClick={() => setMenu(item.name.toLowerCase())}
              >
                {item.name}
              </AnchorLink>
              {menu === item.name.toLowerCase() && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-100 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white"
        >
          <X size={30} />
        </button>

        <ul className="flex flex-col items-start mt-16 space-y-6 pl-6 text-white">
          {menuItems.map((item) => (
            <li key={item.name} className="text-lg">
              <AnchorLink
                className="hover:text-gray-300 transition"
                href={item.href}
                onClick={() => {
                  setMenu(item.name.toLowerCase());
                  closeMenu();
                }}
              >
                {item.name}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;