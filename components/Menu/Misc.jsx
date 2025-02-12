import React, { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const currencyOptions = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
  // add more currencies as needed
];

const veteranOptions = [
  { value: "not_veteran", label: "Not a Veteran" },
  { value: "veteran", label: "Veteran" },
  { value: "prefer_not", label: "Prefer not to say" },
];

const disabilityOptions = [
  { value: "no", label: "No" },
  { value: "yes", label: "Yes" },
  { value: "prefer_not", label: "Prefer not to say" },
];

const relocateOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "maybe", label: "Maybe" },
];

const raceEthnicityOptions = [
  { value: "white", label: "White" },
  { value: "black", label: "Black" },
  { value: "asian", label: "Asian" },
  { value: "hispanic", label: "Hispanic" },
  { value: "other", label: "Other" },
  { value: "prefer_not", label: "Prefer not to say" },
];

const drivingLicenseOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const educationOptions = [
  { value: "none", label: "None" },
  { value: "high_school", label: "High School" },
  { value: "bachelors", label: "Bachelor's" },
  { value: "masters", label: "Master's" },
  { value: "phd", label: "PhD" },
];

const sponsorshipOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const securityOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "not_applicable", label: "Not applicable" },
];

// Custom styles for react-select to have a black focus border
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

function Misc() {
  const countryOptions = useMemo(() => countryList().getData(), []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h1 className="text-lg font-semibold">Miscellaneous Information</h1>
      <form className="space-y-6">
        {/* Total Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="totalExperience"
              className="block text-sm font-medium text-gray-700"
            >
              Total Experience (In Years)
            </label>
            <input
              type="number"
              name="totalExperience"
              placeholder="Total experience in years"
              id="totalExperience"
              className="border p-2 rounded w-full mt-1 focus:outline-none focus:border-black focus:ring-0"
            />
          </div>
          {/* Veteran Status */}
          <div>
            <label
              htmlFor="veteranStatus"
              className="block text-sm font-medium text-gray-700"
            >
              Veteran Status
            </label>
            <Select
              options={veteranOptions}
              placeholder="Select an option"
              name="veteranStatus"
              id="veteranStatus"
              className="mt-1"
              styles={customSelectStyles}
            />
          </div>
        </div>

        {/* Disability and Willing to Relocate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="disability"
              className="block text-sm font-medium text-gray-700"
            >
              Disability
            </label>
            <Select
              options={disabilityOptions}
              placeholder="Select an option"
              name="disability"
              id="disability"
              className="mt-1"
              styles={customSelectStyles}
            />
          </div>
          <div>
            <label
              htmlFor="relocate"
              className="block text-sm font-medium text-gray-700"
            >
              Willing to relocate?
            </label>
            <Select
              options={relocateOptions}
              name="relocate"
              id="relocate"
              placeholder="Select an option"
              className="mt-1"
              styles={customSelectStyles}
            />
          </div>
        </div>

        {/* Race / Ethnicity */}
        <div>
          <label
            htmlFor="raceEthnicity"
            className="block text-sm font-medium text-gray-700"
          >
            Race / Ethnicity
          </label>
          <Select
            options={raceEthnicityOptions}
            placeholder="Select an option"
            name="raceEthnicity"
            id="raceEthnicity"
            className="mt-1"
            styles={customSelectStyles}
          />
        </div>

        {/* Expected Salary and Current Salary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="expectedSalary"
              className="block text-sm font-medium text-gray-700"
            >
              Expected Salary
            </label>
            <input
              type="number"
              name="expectedSalary"
              id="expectedSalary"
              placeholder="Expected salary"
              className="border p-2 rounded w-full mt-1 focus:outline-none focus:border-black focus:ring-0"
            />
          </div>
          <div>
            <label
              htmlFor="currentSalary"
              className="block text-sm font-medium text-gray-700"
            >
              Current Salary (Optional)
            </label>
            <input
              type="number"
              name="currentSalary"
              id="currentSalary"
              placeholder="Current salary"
              className="border p-2 rounded w-full mt-1 focus:outline-none focus:border-black focus:ring-0"
            />
          </div>
        </div>

        {/* Notice Period and Driving License */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="noticePeriod"
              className="block text-sm font-medium text-gray-700"
            >
              Notice Period (In Days)
            </label>
            <input
              type="number"
              name="noticePeriod"
              id="noticePeriod"
              placeholder="Notice period in days"
              className="border p-2 rounded w-full mt-1 focus:outline-none focus:border-black focus:ring-0"
            />
          </div>
          <div>
            <label
              htmlFor="drivingLicense"
              className="block text-sm font-medium text-gray-700"
            >
              Driving License
            </label>
            <Select
              options={drivingLicenseOptions}
              name="drivingLicense"
              id="drivingLicense"
              placeholder="Select an option"
              className="mt-1"
              styles={customSelectStyles}
            />
          </div>
        </div>

        {/* Highest Education Level and Expected Date of Joining */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="educationLevel"
              className="block text-sm font-medium text-gray-700"
            >
              Highest Education Level
            </label>
            <Select
              options={educationOptions}
              placeholder="Select an option"
              name="educationLevel"
              id="educationLevel"
              className="mt-1"
              styles={customSelectStyles}
            />
          </div>
          <div>
            <label
              htmlFor="joiningDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expected Date of Joining
            </label>
            <input
              type="date"
              name="joiningDate"
              id="joiningDate"
              className="border p-2 rounded w-full mt-1 focus:outline-none focus:border-black focus:ring-0"
            />
          </div>
        </div>

        {/* Companies to Exclude */}
        <div>
          <label
            htmlFor="companiesExclude"
            className="block text-sm font-medium text-gray-700"
          >
            Companies to exclude from applying (comma separated) (Optional)
          </label>
          <input
            type="text"
            name="companiesExclude"
            id="companiesExclude"
            placeholder="google, amazon, stripe"
            className="mt-1 block w-full border p-2 rounded focus:outline-none focus:border-black focus:ring-0"
          />
        </div>

        {/* Visa Sponsorship */}
        <div>
          <label
            htmlFor="visaSponsorship"
            className="block text-sm font-medium text-gray-700"
          >
            Will you now, or in the future, require sponsorship for employment
            visa status (e.g. H-1B visa status)?
          </label>
          <Select
            options={sponsorshipOptions}
            placeholder="Select an option"
            name="visaSponsorship"
            id="visaSponsorship"
            className="mt-1"
            styles={customSelectStyles}
          />
        </div>

        {/* Security Clearance */}
        <div>
          <label
            htmlFor="securityClearance"
            className="block text-sm font-medium text-gray-700"
          >
            Do you have an active security clearance? (Optional)
          </label>
          <Select
            options={securityOptions}
            placeholder="Select an option"
            name="securityClearance"
            id="securityClearance"
            className="mt-1"
            styles={customSelectStyles}
          />
        </div>

        {/* Countries Authorized to Work */}
        <div>
          <label
            htmlFor="authorizedCountries"
            className="block text-sm font-medium text-gray-700"
          >
            Countries you are authorised to work?
          </label>
          <Select
            options={countryOptions}
            placeholder="Select countries"
            name="authorizedCountries"
            id="authorizedCountries"
            className="mt-1"
            isMulti
            styles={customSelectStyles}
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-8 py-2   bg-green-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Misc;
