import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={
        "font-sans min-h-screen flex flex-col " +
        (darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900")
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="px-4 md:px-16 py-8 transition-opacity duration-500 ease-in-out flex-grow">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <WorkExperience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="publications">
          <Publications />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
