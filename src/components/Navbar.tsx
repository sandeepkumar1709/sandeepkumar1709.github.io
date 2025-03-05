import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const Navbar = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}) => {
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
  const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
  const MEDIUM_URL = import.meta.env.VITE_MEDIUM_URL;
  const FULL_NAME = import.meta.env.VITE_FULL_NAME;

  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutBottom = aboutSection.getBoundingClientRect().bottom;
        setShowSocials(aboutBottom < 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white p-4 shadow-md sticky top-0 z-10 flex justify-between items-center">
      <div className="text-xl font-bold">{FULL_NAME}</div>
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
      <div className="flex items-center space-x-4">
        {showSocials && (
          <div className="flex space-x-4 transition-opacity duration-300">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white dark:text-gray-300 text-2xl hover:scale-125 transition" />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white dark:text-gray-300 text-2xl hover:scale-125 transition" />
            </a>
            <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer">
              <FaMedium className="text-white dark:text-gray-300 text-2xl hover:scale-125 transition" />
            </a>
          </div>
        )}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-gray-600 rounded-lg hover:bg-gray-700"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
