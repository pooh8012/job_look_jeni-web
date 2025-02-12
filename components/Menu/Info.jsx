import React, { useState, useMemo } from "react";
import { X } from "lucide-react";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function Info() {
  const [urls, setUrls] = useState([
    { id: Date.now(), value: "", type: "GitHub", icon: "/github.png" },
    { id: Date.now() + 1, value: "", type: "LinkedIn", icon: "/linkedin.png" },
  ]);

  const addUrlField = () => {
    setUrls([
      ...urls,
      { id: Date.now(), value: "", type: "Other", icon: "/link.png" },
    ]);
  };

  const removeUrlField = (id) => {
    setUrls(urls.filter((url) => url.id !== id));
  };

  const handleUrlChange = (id, value) => {
    setUrls(urls.map((url) => (url.id === id ? { ...url, value } : url)));
  };

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "black" : provided.borderColor,
      boxShadow: state.isFocused ? "0 0 0 1px black" : provided.boxShadow,
      "&:hover": {
        borderColor: state.isFocused ? "black" : provided.borderColor,
      },
    }),
  };
  const countryOptions = useMemo(() => countryList().getData(), []);

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <input
            type="text"
            placeholder="First Name "
            className="border p-2 rounded w-full "
          />
          <input
            type="text"
            placeholder="Last Name      "
            className="border p-2 rounded w-full "
          />
          <input
            type="tel"
            placeholder="Phone Number "
            className="border p-2 rounded w-full"
          />
          <select className="border p-2 rounded w-full">
            <option>Select Gender</option>
            <option>Female</option>
            <option>Male</option>
            <option>Others</option>
          </select>
          <input
            type="text"
            placeholder="City "
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="State "
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email "
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Address "
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Select
            options={countryOptions}
            name="country"
            id="country"
            className="mt-1 w-full"
            styles={customSelectStyles}
            placeholder="Select Country"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="grid grid-flow-row gap-2 w-full mt-4">
          {urls.map((url, index) => (
            <div
              key={url.id}
              className="flex items-center space-x-2 border p-2 rounded bg-white"
            >
              <img
                src={url.icon}
                alt={url.type + " Icon"}
                className="w-10 h-10"
              />
              <input
                type="url"
                placeholder={url.type + " URL (Optional)"}
                className="border-none p-2 rounded w-full"
                value={url.value}
                onChange={(e) => handleUrlChange(url.id, e.target.value)}
              />
              {urls.length > 1 && (
                <button
                  className=" text-white p-2 rounded"
                  onClick={() => removeUrlField(url.id)}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
          <button
            onClick={addUrlField}
            className="mt-2 bg-green-500 text-white p-2 rounded w-1/6"
          >
            Add More
          </button>
        </div>
      </div>
    </div>
  );
}
