import React, { useState, useEffect } from "react";

const Contact = () => {
  const [likes, setLikes] = useState(() => {
    const stored = localStorage.getItem("likes");
    return stored ? Number(stored) : 69;
  });

  useEffect(() => {
    localStorage.setItem("likes", likes);
  }, [likes]);

  return (
    <div className="relative bg-gradient-to-b from-[#1a1a1a] via-black to-[#111] px-6 py-20 text-center text-white rounded-t-3xl overflow-hidden">
      {/* Title */}
      <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-teal-400">
        Like what you see? 💖
      </h3>

      <p className="text-gray-400 mb-8">
        Show some ❤️ if you enjoyed my portfolio!
      </p>

      {/* Like Button */}
      <button
        onClick={() => setLikes(likes + 1)}
        className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-full text-lg shadow-md transition transform hover:scale-105 active:scale-95"
      >
        ❤️ {likes}
      </button>

      {/* Links */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center items-center text-sm font-medium">
        <a
          href="https://www.linkedin.com/in/aman-shaikh-02b241317/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-300 transition hover:underline"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/AmanShaikh33"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-300 transition hover:underline"
        >
          🐙 GitHub
        </a>
        <a
          href="/amanresume.pdf"
          download
          className="text-gray-300 hover:text-yellow-300 transition hover:underline"
        >
          📄 Download Resume
        </a>
      </div>

      {/* Footer */}
      <p className="mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} Aman Shaikh. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
