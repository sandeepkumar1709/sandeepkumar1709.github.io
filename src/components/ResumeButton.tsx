const ResumeButton = () => {
  return (
    <div className="text-center mt-4">
      <a
        href="/src/assets/MyFiles/Sandeep Poloju.pdf"
        download
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-500 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;
