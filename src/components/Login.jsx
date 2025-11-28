import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";

import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const loggedInUserData = useAuthStore((state) => state.loggedInUserData);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !password) {
      setLoading(false);
      setErrorMessage("Please fill all fields");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        { email, password },
        { withCredentials: true }
      );
      loggedInUserData(res.data);

      setSuccessMessage("Login Successful 🎉 Redirecting...");
      setTimeout(() => navigate("/dashboard"), 800);
    } catch (err) {
      setErrorMessage(
        err.response?.data?.Message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden flex justify-center items-center px-4 text-white animate-fade-in">
      <div
        className="
        backdrop-blur-2xl bg-white/5 
        rounded-3xl px-10 py-12 max-w-md w-full
        border border-white/10 shadow-[0_0_35px_rgba(255,0,120,0.18)]
        transition-all duration-300 animate-pop
      "
      >
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent text-center mb-3">
          Welcome Back <span className="animate-heartbeat">❤️</span>
        </h2>

        <p className="text-center text-sm text-gray-400 mb-8 tracking-wide">
          Your journey continues — let’s get connected.
        </p>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-xs font-semibold tracking-widest text-gray-300">
              EMAIL ADDRESS
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl bg-gray-900/60 border border-white/10 
            focus:ring-2 focus:ring-pink-500 focus:border-pink-500
            outline-none text-sm placeholder-gray-500 transition-all"
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xs font-semibold tracking-widest text-gray-300">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-xl bg-gray-900/60 border border-white/10 
            focus:ring-2 focus:ring-red-500 focus:border-red-500
            outline-none text-sm placeholder-gray-500 transition-all"
              placeholder="Enter password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-lg 
          bg-gradient-to-r from-pink-600 to-red-600 
          hover:from-pink-700 hover:to-red-700 active:scale-95
          transition-all shadow-lg shadow-red-500/30 animate-glow
          disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Error / Success message */}
        <div className="h-8 mt-3 flex justify-center items-center">
          {successMessage && (
            <p className="text-green-400 font-semibold text-sm animate-fade-in">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-400 font-semibold text-sm animate-fade-in">
              {errorMessage}
            </p>
          )}
        </div>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-500 font-semibold hover:text-red-500 transition-all"
          >
            Sign Up
          </Link>
        </p>

        {/* 🔥 NEW CHANGE PASSWORD LINK */}
        <p className="text-center text-sm text-gray-300 mt-2">
          Want to update your password?{" "}
          <span
            onClick={() => navigate("/change-password")}
            className="text-pink-500 cursor-pointer hover:text-red-500 underline transition-all"
          >
            Change Password
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
