import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !age ||
      !gender ||
      !job
    ) {
      setLoading(false);
      setErrorMessage("Please fill all fields");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/signup`, {
        firstName,
        lastName,
        email,
        password,
        age,
        gender,
        job,
      });

      console.log(res);

      setSuccessMessage("Account created successfully! 🎉 Redirecting...");
      setTimeout(() => navigate("/login"), 1200);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setAge("");
      setGender("");
      setJob("");
    } catch (err) {
      setErrorMessage(err.response?.data?.Message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    outerDiv:
      "flex justify-center items-center w-full h-full px-6 text-white animate-fade-in",

    innerDiv:
      "relative max-w-xl w-full p-12 rounded-3xl bg-black/50 backdrop-blur-2xl border border-pink-600/30 shadow-[0_0_40px_rgba(255,0,130,0.35)] hover:shadow-[0_0_60px_rgba(255,0,130,0.55)] transition-all duration-500 animate-pop",

    heading:
      "text-4xl font-extrabold text-center tracking-wide mb-10 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent",

    label: "text-sm uppercase text-gray-300 tracking-widest font-semibold",

    inputLabel: "flex items-center gap-2 cursor-pointer text-gray-300",

    input:
      "mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base focus:border-pink-600 focus:ring-2 focus:ring-pink-600 transition-all outline-none",

    textInput:
      "mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base focus:border-pink-600 focus:ring-2 focus:ring-pink-600 outline-none",

    passwordInput:
      "mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none",

    gender:
      "text-sm uppercase text-gray-300 tracking-widest font-semibold block mb-3",

    button:
      "w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 active:scale-95 transition-all shadow-lg shadow-red-500/30 animate-glow disabled:opacity-60 disabled:cursor-not-allowed",

    error: "text-center text-red-500 font-semibold animate-fade-in",

    success: "text-center text-green-400 font-semibold animate-fade-in",

    para: "mt-6 text-center text-base text-gray-300",

    login: "text-pink-500 cursor-pointer hover:text-red-500 underline",
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <h2 className={styles.heading}>Create Your Account ✨</h2>

        {/* FORM */}
        <form onSubmit={handleSignUp}>
          <div className="grid grid-cols-2 gap-5 mb-6">
            <div>
              <label className={styles.label}>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={styles.input}
              />
            </div>

            <div>
              <label className={styles.label}>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>

          <div className="mb-5">
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.textInput}
            />
          </div>

          <div className="mb-5">
            <label className={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.passwordInput}
            />
          </div>

          <div className="mb-5">
            <label className={styles.label}>Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={styles.textInput}
            />
          </div>

          <div className="mb-5">
            <label className={styles.label}>Job</label>
            <input
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className={styles.textInput}
            />
          </div>

          <div className="mb-8">
            <label className={styles.gender}>Gender</label>
            <div className="flex gap-8 text-lg">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className={styles.inputLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={gender === g}
                    onChange={(e) => setGender(e.target.value)}
                    className="accent-pink-600 w-5 h-5"
                  />
                  <span className="capitalize">{g}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <div className="h-6 mt-2">
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          {successMessage && <p className={styles.success}>{successMessage}</p>}
        </div>

        <p className={styles.para}>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className={styles.login}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
