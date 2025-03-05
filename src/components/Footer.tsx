import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const Footer = () => {
  const FULL_NAME = import.meta.env.VITE_FULL_NAME;
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
  const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
  const MEDIUM_URL = import.meta.env.VITE_MEDIUM_URL;

  return (
    <footer className="flex flex-col items-center p-4 bg-gray-900 text-white">
      <div className="flex space-x-6">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-400 text-3xl hover:scale-110 transition" />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-300 text-3xl hover:scale-110 transition" />
        </a>
        <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer">
          <FaMedium className="text-gray-100 text-3xl hover:scale-110 transition" />
        </a>
      </div>
      <p className="mt-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} {FULL_NAME}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
