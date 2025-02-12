import React from "react";
import { FaRobot, FaSearch, FaLightbulb, FaUserShield } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-purple-700 shadow-md">
        <h1 className="text-3xl font-bold text-white">Job Look Jeni</h1>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-600 to-purple-400 text-white">
        <h2 className="text-5xl font-bold mb-4">
          Job Search is a Breeze with{" "}
          <span className="text-yellow-300">Jeni</span>
        </h2>
        <p className="text-lg opacity-90">
          Your AI-powered assistant to find the best job opportunities swiftly.
        </p>
        <button className="mt-6 bg-yellow-300 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg">
          Try Jeni Now
        </button>
      </section>

      {/* How It Works */}
      <section className="py-16 text-center bg-gray-100">
        <h3 className="text-4xl font-semibold mb-6">How It Works</h3>
        <div className="flex justify-center gap-10">
          <div className="bg-white p-6 rounded-lg w-64 shadow-lg">
            <FaSearch className="text-4xl mx-auto mb-3 text-purple-600" />
            <h4 className="text-xl font-medium">Smart Job Search</h4>
            <p className="opacity-80">
              Jeni scans the web to find the best jobs matching your profile.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg w-64 shadow-lg">
            <FaRobot className="text-4xl mx-auto mb-3 text-purple-600" />
            <h4 className="text-xl font-medium">AI-Powered Applications</h4>
            <p className="opacity-80">
              Automates your application process to boost your chances.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg w-64 shadow-lg">
            <FaUserShield className="text-4xl mx-auto mb-3 text-purple-600" />
            <h4 className="text-xl font-medium">Privacy & Security</h4>
            <p className="opacity-80">
              Your data is secure, and applications are sent with your consent.
            </p>
          </div>
        </div>
      </section>

      {/* Why Use Jeni */}
      <section className="py-16 text-center bg-white">
        <h3 className="text-4xl font-semibold mb-6">Why Use Jeni?</h3>
        <p className="text-lg opacity-80 w-2/3 mx-auto">
          Jeni saves you time by automating job searches, crafting the perfect
          applications, and optimizing your chances of landing your dream job.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 text-center bg-gray-100">
        <h3 className="text-4xl font-semibold mb-6">Features</h3>
        <div className="flex justify-center gap-10">
          <div className="bg-white p-6 rounded-lg w-64 shadow-lg">
            <FaLightbulb className="text-4xl mx-auto mb-3 text-purple-600" />
            <h4 className="text-xl font-medium">AI Resume Enhancer</h4>
            <p className="opacity-80">
              Automatically optimizes your resume for job listings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg w-64 shadow-lg">
            <FaSearch className="text-4xl mx-auto mb-3 text-purple-600" />
            <h4 className="text-xl font-medium">Job Match AI</h4>
            <p className="opacity-80">
              Finds jobs based on your skills and career goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg w-64 shadow-lg">
            <FaRobot className="text-4xl mx-auto mb-3 text-purple-600" />
            <h4 className="text-xl font-medium">Auto Apply</h4>
            <p className="opacity-80">
              Automatically applies to jobs on your behalf with AI-crafted
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-center p-4 text-sm text-white">
        &copy; 2025 Job Look Jeni | All Rights Reserved.
      </footer>
    </div>
  );
}
