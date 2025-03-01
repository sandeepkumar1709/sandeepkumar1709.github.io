const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const tabs = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
  ];

  return (
    <div className="flex justify-center space-x-4 bg-white p-4 shadow-md sticky top-0 z-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`relative px-4 py-2 text-gray-600 font-semibold transition-all duration-300 rounded-lg transform hover:scale-105 ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
