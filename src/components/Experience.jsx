import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Chordz Technology",
    role: "React & React Native Developer Intern",
    duration: "May 2025 – Present",
    description:
      "Working on cross-platform mobile and web applications using React and React Native. Collaborated with UI/UX designers and integrated REST APIs using Axios and Firebase. Built scalable components and managed navigation using React Navigation.",
    tech: ["React", "React Native", "Expo", "Firebase", "Axios"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#111] text-white py-20 px-6 relative overflow-hidden"
    >
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-teal-400 text-center mb-16">
        Experience 💼
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1f1f1f] p-6 rounded-xl border border-white/10 shadow hover:shadow-pink-500/20 transition"
          >
            <h3 className="text-xl font-semibold text-yellow-300">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 text-xs px-3 py-1 rounded-full text-gray-200 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
