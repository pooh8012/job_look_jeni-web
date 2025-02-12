import React, { useState } from "react";
import WorkExperience from "./WorkEx";
import Education from "./Education";
import Skills from "./Skills";
import Info from "./Info";
import Misc from "./Misc";
import Certification from "./Certification";

export default function RightNav() {
  const [resumes, setResumes] = useState([]);
  const [coverLetters, setCoverLetters] = useState([]);

  // Handle Resume Upload
  const handleResumeUpload = (e) => {
    if (resumes.length < 5) {
      const file = e.target.files[0];
      if (file && !resumes.some((resume) => resume.name === file.name)) {
        setResumes([...resumes, file]);
      } else {
        alert("Duplicate file detected or limit exceeded.");
      }
    } else {
      alert("You can upload a maximum of 5 resumes.");
    }
  };

  // Handle Cover Letter Upload
  const handleCoverLetterUpload = (e) => {
    if (coverLetters.length < 5) {
      const file = e.target.files[0];
      if (file && !coverLetters.some((letter) => letter.name === file.name)) {
        setCoverLetters([...coverLetters, file]);
      } else {
        alert("Duplicate file detected or limit exceeded.");
      }
    } else {
      alert("You can upload a maximum of 5 cover letters.");
    }
  };

  // Remove File Function
  const removeFile = (type, index) => {
    if (type === "resume") {
      setResumes(resumes.filter((_, i) => i !== index));
    } else {
      setCoverLetters(coverLetters.filter((_, i) => i !== index));
    }
  };

  return (
    <div className=" container flex-1 p-6 bg-gray-100">
      {/* Resume Upload Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Resume</h2>
        <div className="mt-2 flex items-center justify-between bg-gray-200 p-3 rounded">
          <input
            type="file"
            accept=".pdf"
            onChange={handleResumeUpload}
            className="hidden"
            id="resumeUpload"
          />
          <label
            htmlFor="resumeUpload"
            className="bg-green-500 text-white px-4 py-1 rounded cursor-pointer"
          >
            Upload Resume
          </label>
        </div>
        <ul className="mt-2">
          {resumes.map((file, index) => (
            <li key={index} className="text-gray-700 mt-1 flex justify-between">
              📄 {file.name}
              <button
                onClick={() => removeFile("resume", index)}
                className="text-red-300"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cover Letter Upload Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-4">
        <h2 className="text-xl font-semibold">Cover Letter</h2>
        <div className="mt-2 flex items-center justify-between bg-gray-200 p-3 rounded">
          <input
            type="file"
            accept=".pdf"
            onChange={handleCoverLetterUpload}
            className="hidden"
            id="coverLetterUpload"
          />
          <label
            htmlFor="coverLetterUpload"
            className="bg-green-500 text-white px-4 py-1 rounded cursor-pointer"
          >
            Upload Cover Letter
          </label>
        </div>
        <ul className="mt-2">
          {coverLetters.map((file, index) => (
            <li key={index} className="text-gray-700 mt-1 flex justify-between">
              📄 {file.name}
              <button
                onClick={() => removeFile("coverLetter", index)}
                className="text-red-300"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Personal Information Section */}
      <div className="mt-4">
        <Info />
      </div>

      {/* Work Experience Section */}
      <div className="mt-4">
        <WorkExperience />
      </div>

      {/* Education Section */}
      <div className="mt-4">
        <Education />
      </div>

      {/* Skills Section */}
      <div className="mt-4">
        <Skills />
      </div>

      {/* Certificate Section */}
      <div className="mt-4">
        <Certification />
      </div>

      {/* Misc Section */}
      <div className="mt-4">
        <Misc />
      </div>
    </div>
  );
}
