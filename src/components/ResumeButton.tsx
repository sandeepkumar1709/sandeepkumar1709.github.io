const ResumeButton = () => {
  return (
    <div className="text-center mt-4">
      <a
        href="/src/assets/MyFiles/Sandeep Poloju.pdf"
        download
        className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;
