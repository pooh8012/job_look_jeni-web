import React, { useState } from "react";
import Select from "react-select";
import Image from "next/image";

const institutionTypeOptions = [
  { value: "high_school", label: "High School" },
  { value: "college", label: "College" },
  { value: "university", label: "University" },
  { value: "technical_institute", label: "Technical Institute" },
  { value: "other", label: "Other" },
];

const majorOptions = [
  { value: "computer_science", label: "Computer Science" },
  { value: "business", label: "Business" },
  { value: "engineering", label: "Engineering" },
  { value: "arts", label: "Arts" },
  { value: "biology", label: "Biology" },
];

const degreeTypeOptions = [
  { value: "associate", label: "Associate's" },
  { value: "bachelor", label: "Bachelor's" },
  { value: "master", label: "Master's" },
  { value: "phd", label: "PhD" },
  { value: "diploma", label: "Diploma" },
];

export default function Education() {
  const [showModal, setShowModal] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [education, setEducation] = useState({
    institutionName: "",
    institutionType: null,
    institutionCity: "",
    institutionState: "",
    major: null,
    degreeType: null,
    gpa: "",
    startDate: "",
    endDate: "",
  });

  const handleSave = () => {
    if (editingIndex !== null) {
      const updatedEducation = [...educationList];
      updatedEducation[editingIndex] = education;
      setEducationList(updatedEducation);
      setEditingIndex(null);
    } else {
      setEducationList([...educationList, education]);
    }

    setEducation({
      institutionName: "",
      institutionType: null,
      institutionCity: "",
      institutionState: "",
      major: null,
      degreeType: null,
      gpa: "",
      startDate: "",
      endDate: "",
    });
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setEducation(educationList[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Education</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setEducation({
              institutionName: "",
              institutionType: null,
              institutionCity: "",
              institutionState: "",
              major: null,
              degreeType: null,
              gpa: "",
              startDate: "",
              endDate: "",
            });
            setEditingIndex(null);
            setShowModal(true);
          }}
        >
          Add Education
        </button>
      </div>

      <div className="border rounded-md p-4 bg-blue-50">
        {educationList.length > 0 ? (
          educationList.map((edu, index) => (
            <div
              key={index}
              className="border-b py-2 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{edu.institutionName}</h3>
                <p className="text-sm text-gray-600">
                  {edu.institutionType?.label || "-"} |{" "}
                  {edu.major?.label || "-"}
                </p>
                <p className="text-sm">
                  {edu.institutionCity}, {edu.institutionState}
                </p>
                <p className="text-sm">
                  {edu.degreeType?.label || "-"} | GPA: {edu.gpa || "N/A"}
                </p>
                <p className="text-sm">
                  {edu.startDate} - {edu.endDate ? edu.endDate : "Present"}
                </p>
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
          <p className="text-gray-500 text-center">No education added</p>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editingIndex !== null ? "Edit Education" : "Add Education"}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="institutionName"
                placeholder="Institution Name"
                className="border p-2 rounded w-full col-span-2"
                value={education.institutionName}
                onChange={(e) =>
                  setEducation({
                    ...education,
                    institutionName: e.target.value,
                  })
                }
              />
              <Select
                options={institutionTypeOptions}
                placeholder="Institution Type"
                value={education.institutionType}
                onChange={(selectedOption) =>
                  setEducation({
                    ...education,
                    institutionType: selectedOption,
                  })
                }
                className="col-span-2"
              />
              <input
                type="text"
                name="institutionCity"
                placeholder="City"
                className="border p-2 rounded w-full"
                value={education.institutionCity}
                onChange={(e) =>
                  setEducation({
                    ...education,
                    institutionCity: e.target.value,
                  })
                }
              />
              <input
                type="text"
                name="institutionState"
                placeholder="State"
                className="border p-2 rounded w-full"
                value={education.institutionState}
                onChange={(e) =>
                  setEducation({
                    ...education,
                    institutionState: e.target.value,
                  })
                }
              />
              <Select
                options={majorOptions}
                placeholder="Major"
                value={education.major}
                onChange={(selectedOption) =>
                  setEducation({ ...education, major: selectedOption })
                }
                className="col-span-2"
              />
              <Select
                options={degreeTypeOptions}
                placeholder="Degree Type"
                value={education.degreeType}
                onChange={(selectedOption) =>
                  setEducation({ ...education, degreeType: selectedOption })
                }
                className="col-span-2"
              />
              <input
                type="text"
                placeholder="GPA (Optional)"
                value={education.gpa}
                onChange={(e) =>
                  setEducation({ ...education, gpa: e.target.value })
                }
                className="border p-2 rounded w-full col-span-2"
              />
              <input
                type="date"
                name="startDate"
                className="border p-2 rounded w-full"
                value={education.startDate}
                onChange={(e) =>
                  setEducation({ ...education, startDate: e.target.value })
                }
              />
              <input
                type="date"
                name="endDate"
                className="border p-2 rounded w-full"
                value={education.endDate}
                onChange={(e) =>
                  setEducation({ ...education, endDate: e.target.value })
                }
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
                {editingIndex !== null ? "Save Changes" : "Add Education"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
