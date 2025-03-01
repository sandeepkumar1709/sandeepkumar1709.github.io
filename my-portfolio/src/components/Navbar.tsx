import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white p-4 shadow-md sticky top-0 z-10 flex justify-between items-center">
      <div className="text-xl font-bold">Sandeep Poloju</div>
      <div className="flex space-x-6">
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="#skills" className="hover:text-gray-400">
          Skills
        </a>
        <a href="#experience" className="hover:text-gray-400">
          Experience
        </a>
        <a href="#projects" className="hover:text-gray-400">
          Projects
        </a>
        <a href="#publications" className="hover:text-gray-400">
          Publications
        </a>
      </div>
      <button
        onClick={toggleDarkMode}
        className="px-3 py-1 bg-gray-600 rounded-lg hover:bg-gray-700"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
