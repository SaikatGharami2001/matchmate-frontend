import { useEffect } from "react";
import { useFeedStore } from "../store/useFeedStore";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useFeedStore((s) => s.feed);
  const fetchFeed = useFeedStore((s) => s.fetchFeed);

  useEffect(() => {
    fetchFeed();
  }, []);

  if (!feed || feed.length === 0) return <div>No users found</div>;

  console.log(feed[0]);

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <UserCard
        _id={feed[0]._id}
        firstName={feed[0].firstName}
        lastName={feed[0].lastName}
        age={feed[0].age}
        gender={feed[0].gender}
        job={feed[0].job}
        mode="feed"
      />
    </div>
  );
};

export default Feed;
