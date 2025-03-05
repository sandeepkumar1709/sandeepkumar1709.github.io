const projects = [
  {
    title: "GREBoost",
    description:
      "Developed a microservices-based e-learning platform with Flask, FastAPI, and Angular, deployed on AWS.",
    tech: "Angular, Flask, AWS, Microservices",
    link: "#",
  },
  {
    title: "Twitter Sentiment Analysis",
    description:
      "Built an NLP-based app analyzing Twitter event hype using Flask and Tweepy, deployed on Heroku.",
    tech: "Flask, Tweepy, Heroku, NLTK",
    link: "#",
  },
  {
    title: "Online Crime Reporting System",
    description:
      "Designed a Flutter & Flask app for crime reporting and police case management with Firebase & SQLite.",
    tech: "Flutter, Flask, Firebase, SQLite",
    link: "#",
  },
  {
    title: "Online Pharmacy App with ID Check",
    description:
      "Developed a Hackathon project enabling prescription validation using OpenCV and Flutter.",
    tech: "Flutter, Flask, OpenCV",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <p className="text-sm font-medium mt-2 text-gray-500 dark:text-gray-400">
              {project.tech}
            </p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
