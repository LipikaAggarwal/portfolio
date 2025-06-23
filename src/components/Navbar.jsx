"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
  className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50 rounded-full px-6 py-4 shadow-lg text-white 
    ${isMenuOpen
      ? "bg-transparent backdrop-blur-0 border-0"
      : "bg-white/10 backdrop-blur-lg border border-white/20"} 
    transition-[background,backdrop-filter] duration-300
  `}
>

      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-bold text-blue-400">Lipika</h1>

        <nav
          className={`hidden lg:flex gap-8 text-sm font-semibold ${
            isMenuOpen ? "hidden" : "flex"
          }`}
        >
          <Link href="#home" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link
            href="#projects"
            className="hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="hover:text-blue-400 transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#about"
            className="hover:text-blue-400 transition-colors"
          >
            About
          </Link>
        </nav>
        <Link
        href="#contact"
        className="hidden lg:inline-block px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 transition-all duration-300 text-white shadow-md"
        >
        Get In Touch
        </Link>


        {/* Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-4 rounded-xl px-6 py-4 space-y-4 text-center text-sm font-semibold 
                        bg-white/10 backdrop-blur-lg border border-white/20 shadow-md">
          <Link
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="block text-white hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
            className="block text-white hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
            className="block text-white hover:text-blue-400 transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="block text-white hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="inline-block w-full text-center px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 transition-all duration-300 text-white shadow-md"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
