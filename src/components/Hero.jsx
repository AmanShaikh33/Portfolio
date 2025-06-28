import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const taglines = [
  "Your next dev obsession.",
  "Turning chaos into clean code since day one.",
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
    <div className="text-center py-24 px-4">
      <motion.h1
        className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-teal-400"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        I'm Aman Shaikh
      </motion.h1>

      <motion.p
        className="text-lg mt-4 italic text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        ShaikhSee everything — especially what most devs miss.
      </motion.p>

      <div className="h-[3rem] mt-6 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={taglines[index]}
            className="text-lg text-yellow-200 absolute w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {taglines[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
