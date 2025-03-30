const WorkExperience = () => {
  const experiences = [
    {
      company: "University of Maryland (Shahoveisi Lab)",
      position: "Software Engineer (Graduate Research Assistant)",
      duration: "April 2024 – Jan 2025",
      description: `Built a machine learning web app on AWS to predict Brown Patch disease severity with 85%+ accuracy. Automated large-scale data preprocessing and improved prediction reliability by integrating weather-based features.`,
      url: "https://sites.google.com/view/umdturfgrasspathology/home",
    },
    {
      company: "Infosys",
      position: "Software Engineer",
      duration: "August 2021 – December 2023",
      description: `Developed a data visualization tool using Angular, Flask, and GraphQL for a Fortune 500 client. Improved UI/UX, boosted app performance by 50%, and enhanced search accuracy using transformer models like SBERT.`,
      url: "https://www.infosys.com/",
    },
    {
      company: "Smart Interviews",
      position: "Software Developer and Instructor",
      duration: "February 2021 – May 2021",
      description: `Improved frontend performance of a React-based platform and mentored 160+ students in DSA and problem-solving through interactive labs and feedback sessions.`,
      url: "https://smartinterviews.in/",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <a
            key={index}
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
              <h3 className="text-xl font-semibold">
                {exp.position} - {exp.company}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.duration}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
