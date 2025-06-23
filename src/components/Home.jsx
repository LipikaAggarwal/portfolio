"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  const phrases = [
    "a tech enthusiast",
    "a web developer",
    "a Python coder",
    "learning Java",
    "an AI/ML enthusiast",
    "a problem solver",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenPhrases = 2000;

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-8 px-6 sm:px-10 max-w-7xl mx-auto text-white min-h-screen flex items-center"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            HELLO, I'M <span className="text-blue-300">LIPIKA AGGARWAL</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl font-semibold text-blue-400 h-10"
          >
            I am<span className="ml-2">{currentText}<span className="cursor">|</span></span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm sm:text-lg text-gray-300 mt-4"
          >
            Hey, I’m Lipika — a curious soul who loves building things with intention, learning as I go, and turning late-night bugs into 2AM “aha!” moments.
            Whether it’s organizing events, designing a site, or debugging with a playlist on — I’m all in.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl font-semibold bg-purple-600 hover:bg-purple-500 transition-all duration-300 text-white shadow-md"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl font-semibold border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-12 ml-2 flex justify-center lg:justify-start gap-6 text-2xl text-white"
          >
            <a href="https://github.com/LipikaAggarwal" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/lipikaaggarwal" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaLinkedin />
            </a>
            <a href="mailto:lipika.aggarwal@yahoo.com" className="hover:text-purple-400">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-shrink-0"
        >
          <img
            src="/assets/profile.jpeg"
            alt="Lipika Aggarwal"
            className="rounded-full w-48 h-48 object-cover border-1 border-blue-500"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
