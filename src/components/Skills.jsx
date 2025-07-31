import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "React Native", icon: "📱" },
  { name: "Expo CLI", icon: "🚀" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "GitHub", icon: "🐙" },
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🧠" },
];

const Skills = () => {
  return (
    <div
      className="relative px-6 py-20 text-center bg-black text-white overflow-hidden"
      id="skills"
    >
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-teal-400 mb-16 drop-shadow-xl">
        My Superpowers 💻
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto z-10 relative">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="group p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-pink-500 transition-all duration-300 shadow-md hover:shadow-pink-500/30 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-3 group-hover:animate-bounce">{skill.icon}</div>
            <p className="text-lg font-semibold text-gray-200 group-hover:text-yellow-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
