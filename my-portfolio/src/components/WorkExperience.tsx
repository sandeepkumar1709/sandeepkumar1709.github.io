const WorkExperience = () => {
  return (
    <section id="work-experience" className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-4">Work Experience</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold">
            Software Engineer - Company A
          </h3>
          <p className="text-gray-600">Jan 2022 - Present</p>
          <p>
            Worked on developing scalable web applications using React and
            Node.js.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">
            Frontend Developer - Company B
          </h3>
          <p className="text-gray-600">Jun 2020 - Dec 2021</p>
          <p>Focused on creating responsive UIs with modern CSS frameworks.</p>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;
