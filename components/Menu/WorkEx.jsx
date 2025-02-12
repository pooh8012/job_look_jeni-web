import React, { useState } from "react";
import Image from "next/image";
export default function WorkExperience() {
  const [showModal, setShowModal] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the experience being edited

  const [experience, setExperience] = useState({
    company: "",
    jobTitle: "",
    location: "",
    experienceType: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExperience((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "currentlyWorking" && checked ? { endDate: "" } : {}),
    }));
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      // Update existing experience
      const updatedExperiences = [...experiences];
      updatedExperiences[editingIndex] = experience;
      setExperiences(updatedExperiences);
      setEditingIndex(null);
    } else {
      // Add new experience
      setExperiences([...experiences, experience]);
    }

    // Reset form and close modal
    setExperience({
      company: "",
      jobTitle: "",
      location: "",
      experienceType: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      description: "",
    });
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setExperience(experiences[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Work Experience</h2>
        <button
          className="bg-green-500   text-white px-4 py-2 rounded"
          onClick={() => {
            setExperience({
              company: "",
              jobTitle: "",
              location: "",
              experienceType: "",
              startDate: "",
              endDate: "",
              currentlyWorking: false,
              description: "",
            });
            setEditingIndex(null);
            setShowModal(true);
          }}
        >
          Add Experience
        </button>
      </div>

      <div className="border rounded-md p-4 bg-blue-50">
        {experiences.length > 0 ? (
          experiences.map((exp, index) => (
            <div
              key={index}
              className="border-b py-2 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">
                  {exp.jobTitle} at {exp.company}
                </h3>
                <p className="text-sm text-gray-600">
                  {exp.location} | {exp.experienceType}
                </p>
                <p className="text-sm">
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </p>
                <p className="text-sm">{exp.description}</p>
              </div>

              <Image
                src="/edit.png"
                alt="Edit Text"
                onClick={() => handleEdit(index)}
                width={17}
                height={17}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No experience added</p>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editingIndex !== null
                ? "Edit Work Experience"
                : "Add Work Experience"}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="border p-2 rounded w-full"
                value={experience.company}
                onChange={handleChange}
              />
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="border p-2 rounded w-full"
                value={experience.jobTitle}
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="border p-2 rounded w-full"
                value={experience.location}
                onChange={handleChange}
              />
              <select
                name="experienceType"
                className="border p-2 rounded w-full"
                value={experience.experienceType}
                onChange={handleChange}
              >
                <option value="">Select Experience Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
              </select>
              <input
                type="date"
                name="startDate"
                className="border p-2 rounded w-full"
                value={experience.startDate}
                onChange={handleChange}
              />
              <input
                type="date"
                name="endDate"
                className="border p-2 rounded w-full"
                value={experience.endDate}
                onChange={handleChange}
                disabled={experience.currentlyWorking}
              />
              <label className="flex items-center space-x-2 col-span-2">
                <input
                  type="checkbox"
                  name="currentlyWorking"
                  checked={experience.currentlyWorking}
                  onChange={handleChange}
                />
                <span>Currently Work Here</span>
              </label>
              <textarea
                name="description"
                placeholder="Description"
                className="border p-2 rounded w-full col-span-2"
                value={experience.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSave}
              >
                {editingIndex !== null ? "Save Changes" : "Add Experience"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
