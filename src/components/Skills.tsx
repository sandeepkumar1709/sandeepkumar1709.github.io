const skills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C",
  "CSS",
  "HTML",
  "SQL",
  "ShellScript",
  "Cypher",
  "GraphQL",
  "Angular",
  "Flutter",
  "AWS",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Flask",
  "FastAPI",
  "Spring Boot",
  "PostgreSQL",
  "Firebase",
  "SQLite",
  "PyTorch",
  "TensorFlow",
  "Numpy",
  "Pandas",
  "Matplotlib",
];

const Skills = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition-transform"
          >
            <p className="mt-2 text-lg font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
