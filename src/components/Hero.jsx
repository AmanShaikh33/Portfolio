import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const taglines = [
  "Full Stack Developer | MERN Enthusiast",
  "React & React Native Developer 🚀",
  "I turn ideas into scalable code.",
  "Let's build something amazing!",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden py-28 px-4 text-center bg-black text-white">
      {/* Subtle background grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-teal-400 opacity-30" />

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-pink-500 to-yellow-400 opacity-30" />

      {/* Hero Content */}
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-teal-400 drop-shadow-md"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        I'm Aman Shaikh
      </motion.h1>

      <motion.p
        className="text-lg mt-4 italic text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        React & React Native developer who crafts clean, modern, scalable web and mobile apps with joy ✨
      </motion.p>

      {/* Tagline Animation */}
      <div className="h-[3rem] mt-8 relative flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={taglines[index]}
            className="text-xl text-yellow-200 font-medium absolute"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
          >
            {taglines[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-xl text-black font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          View Projects
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
