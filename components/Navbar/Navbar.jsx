import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
export default function Navbar() {
  const [username, setUsername] = useState("John Doe");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white w-full relative mx-auto">
      {/* Logo */}
      <div className="text-black text-2xl font-bold">Job Look Jeni </div>

      {/* User Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          className="text-black font-medium flex items-center focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {username} <span className="ml-2">▼</span>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg border border-gray-200 rounded-lg">
            <button
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
