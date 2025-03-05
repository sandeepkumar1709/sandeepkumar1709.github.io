const publications = [
  {
    title: "Analyzing Twitter Event Hype vs. Reality",
    description:
      "Published research leveraging NLP techniques to assess sentiment trends.",
    link: "https://www.ijrar.org/papers/IJRAR23C1279.pdf",
  },
  {
    title: "Brown Patch Disease Prediction Web App",
    description:
      "Research on machine learning model for disease prediction using climate data.",
    link: "https://sites.google.com/view/umdturfgrasspathology/home",
  },
];

const Publications = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Publications</h2>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold">{pub.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {pub.description}
            </p>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read Paper
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
