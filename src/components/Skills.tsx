const skills = [
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
];

const Skills = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition-transform"
          >
            <span className="text-2xl">{skill.icon}</span>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
