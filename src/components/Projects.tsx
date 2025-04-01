const projects = [
  {
    title: "GREBoost",
    description:
      "Built a scalable e-learning platform using Flask microservices and Angular, deployed on AWS with CI/CD. Enabled dynamic GRE test generation and user analytics for improved prep tracking.",
    tech: "Angular, Flask, AWS, Microservices",
    link: "https://github.com/sandeepkumar1709/GREBoost/blob/main/README.md",
  },
  {
    title: "Twitter Sentiment Analysis",
    description:
      "Developed an NLP-based app to assess Twitter event hype vs. reality using NLTK and event-time correlation. Achieved 78% model accuracy in sentiment classification.",
    tech: "Flask, Tweepy, Heroku, NLTK",
    link: "https://github.com/sandeepkumar1709/Tweet-Sentiment-Analyzer/blob/master/README.md",
  },
  {
    title: "Online Crime Reporting System",
    description:
      "Designed a cross-platform app for secure crime reporting with police-side case tracking and real-time FIR updates. Improved accessibility for victims through a simplified UI.",
    tech: "Flutter, Flask, Firebase, SQLite",
    link: "https://github.com/sandeepkumar1709/CrimeReporter/blob/master/README.md",
  },
  {
    title: "Online Pharmacy App with ID Check",
    description:
      "Hackathon project enabling prescription upload and facial ID validation using OpenCV. Enhanced safety for regulated medication access.",
    tech: "Flutter, Flask, OpenCV",
    link: null,
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
            {project.link && (
              <a
                href={project.link}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
