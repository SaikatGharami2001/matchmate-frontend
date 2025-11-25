import axios from "axios";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import { useEffect } from "react";

const Feed = () => {
  const getFeed = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token sending:", token);

      const res = await axios.get(BASE_URL + "/feed", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
    } catch (err) {
      console.log("Feed error:", err.response?.data);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <UserCard />
    </div>
  );
};

export default Feed;
