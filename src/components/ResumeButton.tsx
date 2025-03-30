import { useState } from "react";
import Resume from "../assets/MyFiles/Sandeep Poloju.pdf";

const ResumeButton = () => {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <div className="text-center mt-6">
      <div className="space-x-4 mb-4">
        <button
          onClick={() => setShowViewer(!showViewer)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-500 transition"
        >
          {showViewer ? "Hide Resume" : "View Resume"}
        </button>
        <a
          href={Resume}
          download
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-500 transition"
        >
          Download Resume
        </a>
      </div>

      {showViewer && (
        <div className="mt-6 flex justify-center">
          <iframe
            src={Resume}
            title="Resume Viewer"
            className="w-full max-w-4xl h-[600px] border border-gray-300 rounded-md shadow-md"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ResumeButton;
