"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Hackathon Coordinator",
    description:
      "Co-organized a university hackathon with over 240 registrations, managing planning, outreach, and logistics. Learned effective coordination, time management, and how to execute large-scale tech events smoothly.",
    // image: "/assets/hackathon2.jpeg",
  },
  {
    title: "IEEE Design-a-Con",
    description:
      "Secured 3rd place in a team of two at IEEE GGSIPU’s Design-a-Con by designing a creative website based on a fictional character. The experience sharpened my UI/UX thinking, pushed my creative boundaries, and strengthened collaboration under time constraints.",
    // image: "/assets/design2.jpeg",
  },
  {
    title: "International Python Coding Challenge",
    description:
      "Placed 17th globally in the Raffles University Python Coding Challenge 2022, competing among international participants. The experience deepened my logical thinking and problem-solving skills, and earned me a scholarship opportunity from Raffles University, Malaysia.",
    // image: "/ieee.jpg",
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 px-6 sm:px-10 text-white scroll-mt-8"
    >
      <h2 className="text-center text-4xl font-bold mb-16">EXPERIENCE</h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute top-0 left-[1rem] lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 shadow-md z-0"></div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative z-10 flex ${
                index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
              } justify-end`}
            >
              {/* Timeline Circle */}
              <div className="absolute top-1/2 left-[calc(1rem+1px)] lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white z-10"></div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-[#0e1a2b] p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-xl flex flex-col sm:flex-row items-center gap-6 
                  ${index % 2 === 0 ? "lg:ml-[-8]" : "lg:mr-[-8]"} ml-6`}
              >
                {index % 2 === 0 ? (
                  <>
                    {/* <div className="w-1/3">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full rounded-lg shadow-md border border-purple-500 object-cover"
                      />
                    </div> */}
                    <div className="w-full text-left">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {exp.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full text-left">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {exp.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    {/* <div className="w-1/3">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full rounded-lg shadow-md border border-purple-600 object-cover"
                      />
                    </div> */}
                  </>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
