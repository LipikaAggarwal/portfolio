"use client";
import React from "react";
import { Github, Linkedin, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const contactDetails = [
  {
    title: "Email",
    icon: <Mail size={44} className="text-purple-400" />,
    value: "lipika.aggarwal@yahoo.com",
    link: "mailto:lipika.aggarwal@yahoo.com",
  },
  {
    title: "GitHub",
    icon: <Github size={44} className="text-purple-400" />,
    value: "github.com/lipikaaggarwal",
    link: "https://github.com/lipikaaggarwal",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin size={44} className="text-purple-400" />,
    value: "linkedin.com/in/lipikaaggarwal",
    link: "https://linkedin.com/in/lipikaaggarwal",
  },
  {
    title: "Location",
    icon: <MapPin size={44} className="text-purple-400" />,
    value: "New Delhi, India",
    link: "",
  },
];

const ContactInfo = () => {
  return (
    <motion.div
    id="contact"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-transparent px-6 pt-12 pb-12 space-y-10 text-white"
    >
      {/* Top & Bottom Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-purple-600 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-purple-400" />

      {/* Contact Info List */}
      {contactDetails.map((item, idx) => (
        <div key={idx} className="flex items-center gap-6">
          <div className="flex-shrink-0">{item.icon}</div>
          <div>
            <h4 className="text-2xl font-bold tracking-wide text-white">
              {item.title}
            </h4>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg text-gray-400 hover:text-purple-300 transition-all block mt-1"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-base sm:text-lg text-gray-400 block mt-1">
                {item.value}
              </span>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ContactInfo;
