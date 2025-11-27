import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { usePending } from "../store/usePending";

import UserCard from "./UserCard";

const Pending = () => {
  const setRequests = usePending((state) => state.setRequests);
  const requests = usePending((state) => state.requests);

  const pendingRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/requests/pending`, {
        withCredentials: true,
      });
      setRequests(res.data.pendingRequests);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    pendingRequests();
  }, []);

  console.log(requests);

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {requests &&
        requests.map((req) => {
          const { _id, firstName, lastName } = req;
          return (
            <UserCard key={_id} firstName={firstName} lastName={lastName} />
          );
        })}
    </div>
  );
};

export default Pending;
