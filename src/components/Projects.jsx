import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Huddle",
    desc: "A modern social media platform with real-time chat, profiles, and follow features. Built with the MERN stack and styled using Tailwind CSS.",
    live: "https://huddlenew.vercel.app",
    github: "https://github.com/AmanShaikh33/mern-social",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "JWT"],
  },
  {
    title: "Musixly",
    desc: "A fully responsive music player web app with Firebase Authentication and Admin panel. Users can explore songs, albums, and stream live.",
    live: "https://musixly.netlify.app",
    github: "https://github.com/amanshaikh/musixly",
    tech: ["React", "Tailwind CSS", "Firebase", "Cloudinary"],
  },
  {
    title: "Mood Tracker",
    desc: "A gamified mood tracking app where users log feelings, earn XP, maintain streaks, and level up. Includes profile, avatar, and summary calendar.",
    live: "https://mern-frontend-9h2x.onrender.com",
    github: "https://github.com/AmanShaikh33/mernstack-Dashboard",
    tech: ["React", "Node.js", "MongoDB", "Framer Motion", "JWT"],
  },
  {
    title: "FitNote",
    desc: "A minimalist gym tracker built using Python and Flask. Users can log workouts, track progress, and stay consistent with simplicity.",
    live: "#",
    github: "https://github.com/amanshaikh/fitnote",
    tech: ["Python", "Flask", "HTML", "Bootstrap"],
  },
  {
    title: "Art Institution App",
    desc: "A full-featured React Native app with student and teacher panels. Teachers manage classes, attendance, notices, and fees; students view schedules, pay fees, and track attendance. Built for educational institutions.",
    live: "#",
    github: "https://github.com/amanshaikh/art-institution-app",
    tech: ["React Native", "Expo", "Firebase", "React Navigation", "Axios"],
  },
];

const Projects = () => {
  return (
    <section
      className="relative px-6 py-20 text-white bg-gradient-to-br from-black via-[#1f1f1f] to-black overflow-hidden"
      id="projects"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-teal-400 text-center mb-14">
        Projects I’ve Built 🚀
      </h2>

      {/* Project Grid */}
      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto relative z-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="rounded-xl p-6 bg-[#292929] border border-gray-700 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-yellow-300">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-[#333] text-xs px-3 py-1 rounded-full border border-gray-600 text-gray-200 cursor-default"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#facc15",
                    color: "#1f1f1f",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-pink-600 hover:bg-pink-700 px-4 py-1.5 rounded-full text-sm font-medium transition"
              >
                Code
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-teal-600 hover:bg-teal-700 px-4 py-1.5 rounded-full text-sm font-medium transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
