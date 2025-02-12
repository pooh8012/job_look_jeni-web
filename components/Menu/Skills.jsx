import React, { useState } from "react";
import Image from "next/image";
function Skills() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const [experienceYears, setExperienceYears] = useState("");
  // Add Skill
  const addSkill = () => {
    if (newSkill && experienceYears) {
      setSkills([...skills, { skill: newSkill, years: experienceYears }]);
      setNewSkill("");
      setExperienceYears("");
    }
  };

  // Remove Skill
  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 mt-4">
        <h3 className="text-lg font-semibold">Skills</h3>
        <div className="flex space-x-2 mt-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a skill"
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            value={experienceYears}
            onChange={(e) => setExperienceYears(e.target.value)}
            placeholder="Years"
            className="border p-2 rounded w-24"
          />
          <button
            onClick={addSkill}
            className="bg-green-500 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>

        {/* Skills List */}
        <div className="flex flex-wrap mt-2 gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-green-200 px-3 py-1 rounded text-sm flex items-center "
            >
              {skill.skill} | {skill.years} years
              <Image
                src="/close.png"
                alt="Edit Text"
                onClick={() => removeSkill(index)}
                width={10}
                height={10}
                className="cursor-pointer ml-2 mt-1 hover:animate-bounce  "
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
