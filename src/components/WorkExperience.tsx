const WorkExperience = () => {
  const experiences = [
    {
      company: "University of Maryland",
      position: "Graduate Research Assistant",
      duration: "April 2024 – Jan 2025",
      description:
        "Developed and deployed a machine learning web application on AWS, utilizing EC2, Lambda, SageMaker, and Redshift, achieving 85%+ accuracy in predicting Brown Patch disease severity.",
    },
    {
      company: "Infosys",
      position: "Specialist Programmer",
      duration: "August 2021 – December 2023",
      description:
        "Developed a data visualization tool for a Fortune 500 client, improving UI/UX and boosting performance by 40%.",
    },
    {
      company: "Smart Interviews",
      position: "Software Developer and Instructor",
      duration: "February 2021 – May 2021",
      description:
        "Mentored 160 students in data structures, algorithms, and problem-solving.",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold">
              {exp.position} - {exp.company}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.duration}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
