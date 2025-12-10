import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../utils/constants";

import { useAuthStore } from "../../store/useAuthStore";

const Login = () => {
  const loggedInUserData = useAuthStore((state) => state.loggedInUserData);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const styles = {
    outerDiv:
      "min-h-screen w-full overflow-hidden flex justify-center items-center px-4 text-white animate-fade-in",
    innerDiv:
      "backdrop-blur-2xl bg-white/5 rounded-3xl px-10 py-12 max-w-md w-full border border-white/10 shadow-[0_0_35px_rgba(255,0,120,0.18)] transition-all duration-300 animate-pop",
    heading:
      "text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent text-center mb-3",
    subHeading: "text-center text-sm text-gray-400 mb-8 tracking-wide",
    label: "text-xs font-semibold tracking-widest text-gray-300",
    email:
      "px-4 py-3 rounded-xl bg-gray-900/60 border border-white/10 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none text-sm placeholder-gray-500 transition-all",
    password:
      "px-4 py-3 pr-12 rounded-xl bg-gray-900/60 border border-white/10 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-sm placeholder-gray-500 transition-all w-full",
    showPassword:
      "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300 hover:text-white text-sm",
    button:
      "w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 active:scale-95 transition-all shadow-lg shadow-red-500/30 animate-glow disabled:opacity-60 disabled:cursor-not-allowed",
    error: "text-red-400 font-semibold text-sm animate-fade-in",
    success: "text-green-400 font-semibold text-sm animate-fade-in",
    signup: "text-pink-500 font-semibold hover:text-red-500 transition-all",
    changePassword:
      "text-pink-500 cursor-pointer hover:text-red-500 underline transition-all",
    passwordDiv: "flex flex-col gap-2 mb-6",
    messageDiv: "h-8 mt-3 flex justify-center items-center",
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <h2 className={styles.heading}>
          Welcome Back <span className="animate-heartbeat">❤️</span>
        </h2>

        <p className={styles.subHeading}>
          Your journey continues — let’s get connected.
        </p>

        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-2 mb-4">
            <label className={styles.label}>EMAIL ADDRESS</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.email}
              placeholder="Enter email"
            />
          </div>

          <div className={styles.passwordDiv}>
            <label className={styles.label}>PASSWORD</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.password}
                placeholder="Enter password"
              />

              <span
                className={styles.showPassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className={styles.messageDiv}>
          {successMessage && <p className={styles.success}>{successMessage}</p>}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>

        <p className="text-center text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className={styles.signup}>
            Sign Up
          </Link>
        </p>

        <p className="text-center text-sm text-gray-300 mt-2">
          Want to update your password?
          <span
            onClick={() => navigate("/change-password")}
            className={styles.changePassword}
          >
            Change Password
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
