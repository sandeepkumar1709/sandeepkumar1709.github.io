const Projects = () => {
  return (
    <section id="projects" className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p>
            Built with React, TypeScript, and Tailwind CSS to showcase my
            personal projects.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">E-commerce Platform</h3>
          <p>Developed a full-stack application using Node.js and MongoDB.</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
