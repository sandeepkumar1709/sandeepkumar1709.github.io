import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import ProfilePicture from "./ProfilePicture";
import ResumeButton from "./ResumeButton";

const About = () => {
  const FULL_NAME = import.meta.env.VITE_FULL_NAME;
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
  const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
  const MEDIUM_URL = import.meta.env.VITE_MEDIUM_URL;

  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
      <ProfilePicture />
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        About {FULL_NAME}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        I'm {FULL_NAME}, a passionate Software Engineer with experience in
        full-stack development, cloud computing, and machine learning. I
        specialize in building scalable web applications, optimizing
        performance, and enhancing UX through data-driven engineering.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-600 dark:text-gray-400 text-2xl hover:scale-125 transition" />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-600 dark:text-gray-400 text-2xl hover:scale-125 transition" />
        </a>
        <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer">
          <FaMedium className="text-gray-600 dark:text-gray-400 text-2xl hover:scale-125 transition" />
        </a>
      </div>
      <ResumeButton />
    </section>
  );
};

export default About;
