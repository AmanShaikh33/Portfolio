import React, { useState, useEffect } from "react";

const Contact = () => {
  // ✅ Initialize from localStorage directly
  const [likes, setLikes] = useState(() => {
    const stored = localStorage.getItem("likes");
    return stored ? Number(stored) : 69;
  });

  // ✅ Keep updated in localStorage
  useEffect(() => {
    localStorage.setItem("likes", likes);
  }, [likes]);

  return (
    <div className="px-4 py-16 text-center bg-[#111] rounded-t-3xl">
      <p className="mb-4 text-xl text-pink-400">Like what you see? Show some ❤️</p>
      <button
        onClick={() => setLikes(likes + 1)}
        className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full text-lg shadow-lg"
      >
        ❤️ {likes}
      </button>

      <div className="mt-10 space-x-6 text-sm text-gray-300">
        <a href="https://linkedin.com/in/amanshaikh" target="_blank" className="hover:text-yellow-300">LinkedIn</a>
        <a href="https://github.com/AmanShaikh33" target="_blank" className="hover:text-yellow-300">GitHub</a>
        <a href="/AmanShaikh__resume.pdf" download className="hover:text-yellow-300">Download Resume 🔥</a>
      </div>
    </div>
  );
};

export default Contact;
