import { useState } from "react";
import { useRouter } from "next/router";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          {isLogin ? "Welcome " : "Create an Account"}
        </h2>
        <p className="text-gray-500 text-center mb-6">
          {isLogin ? "Log in to your account" : "Sign up for a new account"}
        </p>
        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            onClick={() => router.push("/dashboard")}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </div>
        <p className="text-center text-gray-600 mt-5">
          {isLogin ? "New here?" : "Already have an account?"}
          <button
            className="text-blue-600 font-medium hover:underline ml-1"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}
