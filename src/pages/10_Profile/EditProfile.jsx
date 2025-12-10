import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../utils/constants";

import { useAuthStore } from "../../store/useAuthStore";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [password, setPassword] = useState("");
  const [job, setJob] = useState(user.job);

  const loggedInUserData = useAuthStore((state) => state.loggedInUserData);

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        { firstName, lastName, age, password, job },
        { withCredentials: true }
      );

      loggedInUserData(res.data);

      alert("Profile updated!");
    } catch (err) {
      alert("Failed to update profile!");
    }
  };

  const styles = {
    outerDiv: "min-h-screen w-full flex items-center justify-center px-4",

    card: "w-full max-w-md p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl",

    heading: "text-2xl font-bold text-white mb-6",

    label: "text-pink-300 text-sm",

    input:
      "w-full mt-1 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white",

    button:
      "w-full py-3 mt-4 bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-xl font-semibold",
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Edit Profile</h1>

        {/* FIRST NAME */}
        <div className="mb-4">
          <label className={styles.label}>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* LAST NAME */}
        <div className="mb-4">
          <label className={styles.label}>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* AGE */}
        <div className="mb-4">
          <label className={styles.label}>Age</label>
          <input
            min={18}
            max={60}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <label className={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* JOB */}
        <div className="mb-4">
          <label className={styles.label}>Job</label>
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* SAVE BUTTON */}
        <button onClick={saveProfile} className={styles.button}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
