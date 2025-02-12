import React from "react";
import RightNav from "./RightNav";
import {
  FaHome,
  FaUserEdit,
  FaChartBar,
  FaFileAlt,
  FaFileUpload,
} from "react-icons/fa";

export default function Menu() {
  return (
    <div className=" flex h-screen bg-gray-100 ">
      <div className="w-64 bg-white mt-4 p-4  rounded-t-lg sticky ">
        {/* Profile Section */}
        <div className="flex flex-col items-center border-b pb-4">
          <div className="w-20 h-20 bg-green-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
            Ad
          </div>
          <h2 className="text-lg font-semibold mt-2">Welcome Back</h2>
          <p className="text-gray-500 text-sm">admin@gmail.com</p>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4 space-y-2">
          <NavItem icon={<FaHome />} text="Home" />
          {/* <NavItem icon={<FaFileUpload />} text="Ask For Referral" /> */}
          <NavItem icon={<FaUserEdit />} text="Edit Profile" />
          {/* <NavItem icon={<FaChartBar />} text="Analytics" /> */}
          {/* <NavItem icon={<FaFileAlt />} text="AI Cover Letter" />
          <NavItem icon={<FaFileAlt />} text="AI Interview prep" /> */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ">
        <RightNav />
      </div>
    </div>
  );
  // Navigation Item Component
  function NavItem({ icon, text }) {
    return (
      <div className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded cursor-pointer">
        <div className="text-blue-500">{icon}</div>
        <span className="text-gray-700 font-medium">{text}</span>
      </div>
    );
  }
}
