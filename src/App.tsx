import { useState } from "react";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import ResumeButton from "./components/ResumeButton";
import Tabs from "./components/Tabs";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />
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
