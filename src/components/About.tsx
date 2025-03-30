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
        I'm {FULL_NAME}, a Software Engineer with a passion for solving
        real-world problems through code. With experience in full-stack
        development, cloud platforms like AWS, and applied machine learning, I
        enjoy building scalable, high-performance applications that deliver real
        impact. I’ve worked with diverse technologies—from React and TypeScript
        to Flask and Kubernetes— always striving to write clean, efficient, and
        thoughtful code.
        <br className="hidden md:block" />
        <br className="hidden md:block" />
        Outside of work, I mentor students, contribute to open-source projects,
        and am always up for a good problem-solving challenge.
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
