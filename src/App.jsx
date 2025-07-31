import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience'; // ✅ Import added
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="relative bg-[#0f0f0f] min-h-screen text-white font-sans overflow-x-hidden">

      {/* 🔮 Glowing animated background blobs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-ping top-20 left-10"></div>
        <div className="absolute w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-1/2 left-1/3"></div>
        <div className="absolute w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-ping bottom-20 right-10"></div>
      </div>

      {/* 🌟 Main Sections */}
      <Hero />
      <Skills />
      <Experience /> {/* ✅ Experience section included */}
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
