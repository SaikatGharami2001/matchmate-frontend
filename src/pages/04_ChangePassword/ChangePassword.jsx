import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    // For user friendly error messages
    const labels = {
      email: "Email",
      oldPassword: "Old Password",
      newPassword: "New Password",
    };

    const fields = { email, oldPassword, newPassword };
    const missing = Object.entries(fields).find(([key, value]) => !value);

    if (missing) {
      const [key, value] = missing;
      setLoading(false);
      setErrorMessage(`${labels[key]} is required`);
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/change-password`, fields);
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

  const styles = {
    outerDiv:
      "min-h-screen flex items-center justify-center px-4 text-white animate-fade-in",

    innerDiv:
      "bg-black/50 backdrop-blur-2xl border border-pink-600/30 rounded-3xl p-10 w-full max-w-lg shadow-[0_0_40px_rgba(255,0,130,0.35)] hover:shadow-[0_0_60px_rgba(255,0,130,0.55)] transition-all duration-500 animate-pop",

    heading:
      "text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent",

    subText: "text-center text-gray-300 mb-8",

    label: "text-sm uppercase text-gray-300 tracking-widest font-semibold",

    emailInput:
      "mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base focus:border-pink-600 focus:ring-2 focus:ring-pink-600 outline-none",

    oldPasswordInput:
      "w-full px-4 py-3 pr-12 bg-neutral-900 border border-neutral-700 rounded-xl text-base focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none",

    newPasswordInput:
      "w-full px-4 py-3 pr-12 bg-neutral-900 border border-neutral-700 rounded-xl text-base focus:border-pink-600 focus:ring-2 focus:ring-pink-600 outline-none",

    showPwToggle:
      "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300 hover:text-white text-sm",

    button:
      "w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 active:scale-95 transition-all shadow-lg shadow-red-500/30 animate-glow disabled:opacity-60 disabled:cursor-not-allowed",

    error: "text-red-400 font-semibold animate-fade-in",

    success: "text-green-400 font-semibold animate-fade-in",

    backToLogin:
      "text-pink-500 cursor-pointer hover:text-red-500 underline text-sm transition-all",
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <h2 className={styles.heading}>Change Password 🔐</h2>

        <p className={styles.subText}>Update your account password securely.</p>

        <form onSubmit={handleChangePassword}>
          {/* EMAIL */}
          <div className="mb-6">
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
              placeholder="Enter email"
            />
          </div>

          {/* OLD PASSWORD */}
          <div className="mb-6">
            <label className={styles.label}>Old Password</label>
            <div className="relative mt-2">
              <input
                type={showOldPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className={styles.oldPasswordInput}
                placeholder="Enter old password"
              />

              <span
                className={styles.showPwToggle}
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* NEW PASSWORD */}
          <div className="mb-8">
            <label className={styles.label}>New Password</label>
            <div className="relative mt-2">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={styles.newPasswordInput}
                placeholder="Enter new password"
              />

              <span
                className={styles.showPwToggle}
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>

        {/* FEEDBACK */}
        <div className="mt-4 h-6 text-center">
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          {successMessage && <p className={styles.success}>{successMessage}</p>}
        </div>

        {/* NAVIGATION */}
        <div className="mt-6 text-center">
          <span
            onClick={() => navigate("/login")}
            className={styles.backToLogin}
          >
            Back to Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
