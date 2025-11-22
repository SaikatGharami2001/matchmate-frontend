import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("saikat@gmail.com");
  const [password, setPassword] = useState("Raiden@199725");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:1111/login", {
        emailAddress,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full px-4 text-white">
      <div
        className="backdrop-blur-2xl bg-white/5 rounded-3xl px-10 py-12 max-w-md w-full border border-white/10 shadow-2xl 
      hover:shadow-pink-600/40 transition-all duration-300"
      >
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent text-center mb-8 tracking-wide">
          Welcome Back ❤️
        </h2>

        {/* Email */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-sm uppercase tracking-widest text-gray-300">
            Email Address
          </label>
          <input
            type="text"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="px-4 py-3 rounded-xl bg-gray-800/60 border border-white/10 focus:ring-2 focus:ring-pink-500 outline-none text-sm placeholder-gray-400 transition-all"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 mb-6">
          <label className="text-sm uppercase tracking-widest text-gray-300">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-xl bg-gray-800/60 border border-white/10 focus:ring-2 focus:ring-red-500 outline-none text-sm placeholder-gray-400 transition-all"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-pink-600 to-red-600 
          hover:from-pink-700 hover:to-red-700 active:scale-95 transition-all shadow-lg shadow-red-500/20"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <span className="text-pink-500 underline cursor-pointer hover:text-red-500">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
