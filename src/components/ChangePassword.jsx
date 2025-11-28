import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !oldPassword || !newPassword) {
      setLoading(false);
      setErrorMessage("Please fill all fields");

      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/change-password`, {
        email,
        oldPassword,
        newPassword,
      });

      setSuccessMessage("Password updated successfully! 🎉 Redirecting...");
      setTimeout(() => navigate("/login"), 1500);

      setEmail("");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setErrorMessage(err.response?.data?.Message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-white animate-fade-in">
      <div
        className="
        bg-black/50 backdrop-blur-2xl 
        border border-pink-600/30 
        rounded-3xl p-10 w-full max-w-lg
        shadow-[0_0_40px_rgba(255,0,130,0.35)]
        hover:shadow-[0_0_60px_rgba(255,0,130,0.55)]
        transition-all duration-500 animate-pop
      "
      >
        <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Change Password 🔐
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Update your account password securely.
        </p>

        <form onSubmit={handleChangePassword}>
          {/* Email */}
          <div className="mb-6">
            <label className="text-sm uppercase text-gray-300 tracking-widest font-semibold">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base
            focus:border-pink-600 focus:ring-2 focus:ring-pink-600 outline-none"
              placeholder="Enter email"
            />
          </div>

          {/* Old Password */}
          <div className="mb-6">
            <label className="text-sm uppercase text-gray-300 tracking-widest font-semibold">
              Old Password
            </label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base
            focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none"
              placeholder="Enter old password"
            />
          </div>

          {/* New Password */}
          <div className="mb-8">
            <label className="text-sm uppercase text-gray-300 tracking-widest font-semibold">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base
            focus:border-pink-600 focus:ring-2 focus:ring-pink-600 outline-none"
              placeholder="Enter new password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-lg 
          bg-gradient-to-r from-pink-600 to-red-600 
          hover:from-pink-700 hover:to-red-700 active:scale-95
          transition-all shadow-lg shadow-red-500/30 animate-glow
          disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>

        {/* Error & Success */}
        <div className="mt-4 h-6 text-center">
          {errorMessage && (
            <p className="text-red-400 font-semibold animate-fade-in">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p className="text-green-400 font-semibold animate-fade-in">
              {successMessage}
            </p>
          )}
        </div>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <span
            onClick={() => navigate("/login")}
            className="text-pink-500 cursor-pointer hover:text-red-500 underline text-sm transition-all"
          >
            Back to Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
