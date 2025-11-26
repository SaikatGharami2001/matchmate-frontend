import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";

import { useAuthStore } from "../store/useAuthStore";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [password, setPassword] = useState("");

  const loggedInUserData = useAuthStore((state) => state.loggedInUserData);

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        { firstName, lastName, age, password },
        { withCredentials: true }
      );
      if (password.trim() !== "") return loggedInUserData.password;
      loggedInUserData(res.data);
      console.log("Profile updated:", res.data);
      alert("Profile updated!");
    } catch (err) {
      console.log(err);
      alert("Failed to update profile!");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl">
        <h1 className="text-2xl font-bold text-white mb-6">Edit Profile</h1>

        {/* FIRST NAME */}
        <div className="mb-4">
          <label className="text-pink-300 text-sm">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full mt-1 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white"
          />
        </div>

        {/* LAST NAME */}
        <div className="mb-4">
          <label className="text-pink-300 text-sm">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full mt-1 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white"
          />
        </div>

        {/* AGE */}
        <div className="mb-4">
          <label className="text-pink-300 text-sm">Age</label>
          <input
            min={18}
            max={60}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full mt-1 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <label className="text-pink-300 text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white"
          />
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={saveProfile}
          className="w-full py-3 mt-4 bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-xl font-semibold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
