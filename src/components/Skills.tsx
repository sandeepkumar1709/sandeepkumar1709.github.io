import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

import PythonImg from "../assets/skills/python.jpg";
import JavaImg from "../assets/skills/java.png";
import JavaScriptImg from "../assets/skills/javascript.png";
import TypeScriptImg from "../assets/skills/typescript.png";
import CImg from "../assets/skills/c.png";
import CSSImg from "../assets/skills/CSS.png";
import HTMLImg from "../assets/skills/html.jpg";
import SQLImg from "../assets/skills/sql.png";
import ShellScriptImg from "../assets/skills/shellscript.webp";
// import CypherImg from "../assets/skills/cypher.png";
import GraphQLImg from "../assets/skills/graphql.png";
import AngularImg from "../assets/skills/angularJS.png";
import FlutterImg from "../assets/skills/flutter.png";
import AWSImg from "../assets/skills/aws.jpg";
import DockerImg from "../assets/skills/docker.png";
import KubernetesImg from "../assets/skills/kubernetes.png";
import GitHubActionsImg from "../assets/skills/github-actions.png";
import FlaskImg from "../assets/skills/flask.png";
import FastAPIImg from "../assets/skills/fastapi.png";
import SpringBootImg from "../assets/skills/springboot.png";
import PostgreSQLImg from "../assets/skills/postgresql.png";
import FirebaseImg from "../assets/skills/firebase.jpg";
import SQLiteImg from "../assets/skills/sqlite.png";
import PyTorchImg from "../assets/skills/pytorch.png";
import TensorFlowImg from "../assets/skills/tensorflow.png";
import NumpyImg from "../assets/skills/numpy.jpg";
import PandasImg from "../assets/skills/pandas.png";
import MatplotlibImg from "../assets/skills/matplotlib.png";
import ReactImg from "../assets/skills/react.svg";

const allSkills = [
  { name: "Python", image: PythonImg },
  { name: "Java", image: JavaImg },
  { name: "JavaScript", image: JavaScriptImg },
  { name: "TypeScript", image: TypeScriptImg },
  { name: "C", image: CImg },
  { name: "CSS", image: CSSImg },
  { name: "HTML", image: HTMLImg },
  { name: "SQL", image: SQLImg },
  { name: "ShellScript", image: ShellScriptImg },
  { name: "Cypher", image: "src/assets/skills/cypher.png" }, // Placeholder for Cypher
  { name: "GraphQL", image: GraphQLImg },
  { name: "Angular", image: AngularImg },
  { name: "Flutter", image: FlutterImg },
  { name: "AWS", image: AWSImg },
  { name: "Docker", image: DockerImg },
  { name: "Kubernetes", image: KubernetesImg },
  { name: "GitHub Actions", image: GitHubActionsImg },
  { name: "Flask", image: FlaskImg },
  { name: "FastAPI", image: FastAPIImg },
  { name: "Spring Boot", image: SpringBootImg },
  { name: "PostgreSQL", image: PostgreSQLImg },
  { name: "Firebase", image: FirebaseImg },
  { name: "SQLite", image: SQLiteImg },
  { name: "PyTorch", image: PyTorchImg },
  { name: "TensorFlow", image: TensorFlowImg },
  { name: "Numpy", image: NumpyImg },
  { name: "Pandas", image: PandasImg },
  { name: "Matplotlib", image: MatplotlibImg },
  { name: "React", image: ReactImg },
];

const Skills = () => {
  const messages = [
    "Is the skill you're looking for missing?",
    "Not seeing the skill you expected?",
    "Looking for a skill that’s not listed?",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const quotes = [
    "Skills evolve, but a growth mindset lasts forever.",
    "Mastery is not about knowing everything; it's about continuously learning and adapting.",
    "Technology changes, but the ability to learn and adapt remains the greatest skill of all.",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const [displayedSkills, setDisplayedSkills] = useState<typeof allSkills>([]);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowAllSkills(false);
      }
    };
    if (showAllSkills) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showAllSkills]);

  useEffect(() => {
    if (!showAllSkills) {
      const shuffleSkills = () => {
        const shuffled = allSkills.sort(() => 0.5 - Math.random()).slice(0, 5);
        setDisplayedSkills(shuffled);
      };
      shuffleSkills();
      const interval = setInterval(shuffleSkills, 3000);
      return () => clearInterval(interval);
    }
  }, [showAllSkills]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowAllSkills(false);
      }
    };
    if (showAllSkills) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAllSkills]);

  const filteredSkills = allSkills.filter((skill) =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <p className="italic text-gray-600 dark:text-gray-300 text-lg mb-6">
        "Skills shouldn't be a factor to decide capability; it's just a tool.
        It's all about how well you can utilize it."
      </p>
      <div className="flex justify-center gap-6 animate-fade-in">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="w-40 h-40 flex flex-col items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition-transform p-4"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-32 h-32 object-contain"
            />
            <p className="text-sm font-semibold mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition flex items-center gap-2"
          onClick={() => setShowAllSkills(true)}
        >
          <FaSearch /> Search Skills
        </button>
      </div>

      {showAllSkills && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-6">
          <div
            ref={modalRef}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-4/5 max-h-[70vh] overflow-auto"
          >
            <button
              className="absolute top-5 right-5 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => setShowAllSkills(false)}
            >
              Close
            </button>
            <input
              type="text"
              placeholder="Search Skills..."
              className="w-3/4 p-3 mb-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredSkills.length > 0 ? (
                filteredSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="w-40 h-40 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg shadow p-4"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-32 h-32 object-contain"
                    />
                    <p className="text-sm font-semibold mt-2">{skill.name}</p>
                  </div>
                ))
              ) : (
                <p className="text-lg font-semibold text-gray-500 dark:text-gray-300">
                  No matching skills found
                </p>
              )}
            </div>
            <div className="mt-6 text-center border-t pt-4">
              <p className="text-lg font-semibold text-gray-500 dark:text-gray-300">
                {randomMessage}
              </p>
              <div className="flex justify-center gap-4 mt-3">
                <div className="w-40 h-40 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg shadow p-4">
                  <p className="text-lg font-semibold">Adaptability</p>
                </div>
                <div className="w-40 h-40 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg shadow p-4">
                  <p className="text-lg font-semibold">Fast Learner</p>
                </div>
              </div>
              <p className="mt-4 text-xl font-bold text-gray-700 dark:text-gray-200 tracking-wide">
                Is this a perspective we can agree on?
              </p>
              <p className="mt-4 italic text-gray-500 dark:text-gray-400 text-md">
                {randomQuote}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
