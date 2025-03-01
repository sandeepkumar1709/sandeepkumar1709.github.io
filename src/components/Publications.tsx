const Publications = () => {
  return (
    <section id="publications" className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-4">
        Publications & Research
      </h2>
      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold">
            "Exploring AI in Healthcare"
          </h3>
          <p className="text-gray-600">Published in XYZ Journal, 2023</p>
          <a href="#" className="text-gray-600 hover:underline">
            Read more
          </a>
        </li>
        <li>
          <h3 className="text-xl font-semibold">
            "Optimizing Web Performance"
          </h3>
          <p className="text-gray-600">Presented at ABC Conference, 2022</p>
          <a href="#" className="text-gray-600 hover:underline">
            Read more
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Publications;
