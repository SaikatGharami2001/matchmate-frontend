import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      if (!firstName || !lastName || !email || !password || !age || !gender) {
        setErrorMessage("Please fill all fields");
        return;
      }

      setSuccessMessage("");
      setErrorMessage("");

      const res = await axios.post("http://localhost:1111/signup", {
        firstName,
        lastName,
        email,
        password,
        age,
        gender,
      });

      setSuccessMessage(res.data.Message + " 🎉 Redirecting...");

      setTimeout(() => {
        navigate("/login");
      }, 2500);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setAge("");
      setGender("");
    } catch (err) {
      setErrorMessage(err.response?.data?.Message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full px-6 text-white animate-fade-in">
      <div
        className="
        relative max-w-xl w-full p-12 rounded-3xl
        bg-black/50 backdrop-blur-2xl
        border border-pink-600/30
        shadow-[0_0_40px_rgba(255,0,130,0.35)]
        hover:shadow-[0_0_60px_rgba(255,0,130,0.55)]
        transition-all duration-500
        animate-pop
      "
      >
        {/* HEADER */}
        <h2 className="text-4xl font-extrabold text-center tracking-wide mb-10 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Create Your Account ✨
        </h2>
        {/* FORM GRID */}
        <div className="grid grid-cols-2 gap-5 mb-6">
          <div>
            <label className="text-sm uppercase text-gray-300 tracking-widest font-semibold">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base
                focus:border-pink-600 focus:ring-2 focus:ring-pink-600 transition-all outline-none"
            />
          </div>

          <div>
            <label className="text-sm uppercase text-gray-300 tracking-widest font-semibold">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base
                focus:border-pink-600 focus:ring-2 focus:ring-pink-600 transition-all outline-none"
            />
          </div>
        </div>
        {/* EMAIL */}
        <div className="mb-5">
          <label className="text-sm uppercase text-gray-300 tracking-widest font-semibold">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base
              focus:border-pink-600 focus:ring-2 focus:ring-pink-600 outline-none"
          />
        </div>
        {/* PASSWORD */}
        <div className="mb-5">
          <label className="text-sm uppercase text-gray-300 tracking-widest font-semibold">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base
              focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none"
          />
        </div>
        {/* AGE */}
        <div className="mb-5">
          <label className="text-sm uppercase text-gray-300 tracking-widest font-semibold">
            Age
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-2 w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-base
              focus:border-pink-600 focus:ring-2 focus:ring-pink-600 outline-none"
          />
        </div>
        {/* GENDER */}
        <div className="mb-8">
          <label className="text-sm uppercase text-gray-300 tracking-widest font-semibold block mb-3">
            Gender
          </label>
          <div className="flex gap-8 text-lg">
            {["Male", "Female", "Other"].map((g) => (
              <label
                key={g}
                className="flex items-center gap-2 cursor-pointer text-gray-300"
              >
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
        {/* BUTTON */}
        <button
          onClick={handleSignUp}
          className="w-full py-3 rounded-xl font-bold text-lg 
          bg-gradient-to-r from-pink-600 to-red-600 
          hover:from-pink-700 hover:to-red-700 active:scale-95
          transition-all shadow-lg shadow-red-500/30 animate-glow"
        >
          Create Account
        </button>

        <div className="h-6 mt-2">
          {errorMessage && (
            <p className="text-center text-red-500 font-semibold animate-fade-in">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="text-center text-green-400 font-semibold animate-fade-in">
              {successMessage}
            </p>
          )}
        </div>

        <p className="mt-6 text-center text-base text-gray-300">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-pink-500 cursor-pointer hover:text-red-500 underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
