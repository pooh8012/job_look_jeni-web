import React, { useState } from "react";
import Image from "next/image";

export default function Certification() {
  const [showModal, setShowModal] = useState(false);
  const [certifications, setCertifications] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [certification, setCertification] = useState({
    title: "",
    startDate: "",
    endDate: "",
    url: "",
  });

  const handleSave = () => {
    if (editingIndex !== null) {
      const updatedCertifications = [...certifications];
      updatedCertifications[editingIndex] = certification;
      setCertifications(updatedCertifications);
      setEditingIndex(null);
    } else {
      setCertifications([...certifications, certification]);
    }

    setCertification({ title: "", startDate: "", endDate: "", url: "" });
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setCertification(certifications[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Certifications</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setCertification({
              title: "",
              startDate: "",
              endDate: "",
              url: "",
            });
            setEditingIndex(null);
            setShowModal(true);
          }}
        >
          Add Certification
        </button>
      </div>

      <div className="border rounded-md p-4 bg-blue-50">
        {certifications.length > 0 ? (
          certifications.map((cert, index) => (
            <div
              key={index}
              className="border-b py-2 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-600">
                  {cert.startDate} - {cert.endDate ? cert.endDate : "Present"}
                </p>
                {cert.url && (
                  <p className="text-sm text-blue-500">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certification
                    </a>
                  </p>
                )}
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
          <p className="text-gray-500 text-center">No certifications added</p>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editingIndex !== null
                ? "Edit Certification"
                : "Add Certification"}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Certification Title"
                className="border p-2 rounded w-full col-span-2"
                value={certification.title}
                onChange={(e) =>
                  setCertification({ ...certification, title: e.target.value })
                }
              />
              <input
                type="date"
                className="border p-2 rounded w-full"
                value={certification.startDate}
                onChange={(e) =>
                  setCertification({
                    ...certification,
                    startDate: e.target.value,
                  })
                }
              />
              <input
                type="date"
                className="border p-2 rounded w-full"
                value={certification.endDate}
                onChange={(e) =>
                  setCertification({
                    ...certification,
                    endDate: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Certification URL"
                className="border p-2 rounded w-full col-span-2"
                value={certification.url}
                onChange={(e) =>
                  setCertification({ ...certification, url: e.target.value })
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
                {editingIndex !== null ? "Save Changes" : "Add Certification"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
