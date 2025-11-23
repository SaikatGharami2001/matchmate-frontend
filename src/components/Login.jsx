import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("saikat@gmail.com");
  const [password, setPassword] = useState("Raiden@199725");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async () => {
    try {
      setErrorMessage("");
      setSuccessMessage("");

      const res = await axios.post(
        "http://localhost:1111/login",
        { email, password },
        { withCredentials: true }
      );

      setSuccessMessage("Login Successful 🎉 Redirecting...");
      // setTimeout(() => navigate("/profile"), 800);
    } catch (err) {
      setSuccessMessage("");
      setErrorMessage(
        err.response?.data?.Message || "Invalid email or password"
      );
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 text-white animate-fade-in">
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
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-xl bg-gray-900/60 border border-white/10 
            focus:ring-2 focus:ring-red-500 focus:border-red-500
            outline-none text-sm placeholder-gray-500 transition-all"
            placeholder="Enter password"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl font-bold text-lg 
          bg-gradient-to-r from-pink-600 to-red-600 
          hover:from-pink-700 hover:to-red-700 active:scale-95
          transition-all shadow-lg shadow-red-500/30 animate-glow"
        >
          Login
        </button>

        {/* ERROR MESSAGE HERE */}

        {successMessage && (
          <p className="text-center mt-4 text-green-400 font-semibold tracking-wide animate-fade-in">
            {successMessage}
          </p>
        )}

        {errorMessage && (
          <p className="text-center mt-2 text-red-400 font-semibold tracking-wide animate-fade-in">
            {errorMessage}
          </p>
        )}

        <p className="text-center text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-500 font-semibold hover:text-red-500 transition-all"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
