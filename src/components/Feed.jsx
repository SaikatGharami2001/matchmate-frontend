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

  const currentUser = feedUser[cardIndex];

  if (!currentUser) return null;
  const { firstName, lastName } = currentUser;

  const previousCard = () => setCardIndex((prev) => prev - 1);
  const nextCard = () => setCardIndex((prev) => prev + 1);

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      {/* {feedUser &&
        feedUser.map((res) => {
          const age = 10;
          const { firstName, lastName, _id } = res;
          return (
            <UserCard
              key={res?._id}
              firstName={firstName}
              lastName={lastName}
              age={age}
            />
          );
        })} */}
      <UserCard
        firstName={firstName}
        lastName={lastName}
        prevCard={previousCard}
        nextCard={nextCard}
      />
    </div>
  );
};

export default Feed;
