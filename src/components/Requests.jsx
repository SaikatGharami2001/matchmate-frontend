import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { usePending } from "../store/usePending";
import UserCard from "./UserCard";

const Requests = () => {
  const [loading, setLoading] = useState(true);

  const setRequests = usePending((state) => state.setRequests);
  const requests = usePending((state) => state.requests);

  const pendingRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/requests/pending`, {
        withCredentials: true,
      });

      setRequests(
        Array.isArray(res.data.pendingRequests) ? res.data.pendingRequests : []
      );
    } catch (err) {
      console.log(err);
      setRequests([]);
    } finally {
      setLoading(false);
    }
  };

  const reviewRequest = async (status, requestId) => {
    await axios.post(
      `${BASE_URL}/request/review/${status}/${requestId}`,
      {},
      { withCredentials: true }
    );
  };

  useEffect(() => {
    pendingRequests();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  if (!Array.isArray(requests) || requests.length === 0)
    return (
      <h1 className="text-center text-xl text-gray-600">No Requests Found</h1>
    );

  const accept = async (requestId) => {
    try {
      await reviewRequest("accepted", requestId);
      setRequests((prev) => prev.filter((req) => req._id !== requestId));
    } catch (err) {
      console.log("Error accepting:", err);
    }
  };

  const reject = async (requestId) => {
    try {
      await reviewRequest("rejected", requestId);
      setRequests((prev) => prev.filter((req) => req._id !== requestId));
    } catch (err) {
      console.log("Error rejecting:", err);
    }
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {requests.map((req) => {
        const { _id: requestId, user } = req;

        if (!user) return null; // prevent breaking render

        const { firstName, lastName, age } = user;

        return (
          <UserCard
            key={requestId}
            requestId={requestId}
            firstName={firstName}
            lastName={lastName}
            age={age}
            mode="pending"
            acceptRequest={accept}
            rejectRequest={reject}
          />
        );
      })}
    </div>
  );
};

export default Requests;
