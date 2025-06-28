import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind", icon: "💨" },
  { name: "GitHub", icon: "🐙" },
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🧠" },
];

const Skills = () => {
  return (
    <div className="px-8 py-16 text-center" id="skills">
      <h2 className="text-3xl font-semibold mb-10 text-yellow-300">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="hover:scale-110 transition p-4 rounded-lg bg-[#1a1a1a] hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="mt-2 text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
