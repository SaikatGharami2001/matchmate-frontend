import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";

import UserCard from "./UserCard";

const Feed = () => {
  const [feedUser, setFeedUser] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      console.log("Feed data:", res.data.data);
      setFeedUser(res.data.data);
    } catch (error) {
      console.log("Feed error:", error.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (feedUser.length === 0) return <div>No users found</div>;

  const currentUser = feedUser[cardIndex];

  if (!currentUser) return null;

  const { firstName, lastName, _id } = currentUser;

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <UserCard
        _id={_id}
        firstName={firstName}
        lastName={lastName}
        mode="feed"
      />
    </div>
  );
};

export default Feed;
