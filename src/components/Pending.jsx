import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";

const Pending = () => {
  const pendingRequests = async () => {
    try {
      await axios.get(BASE_URL + "/user/requests/pending", {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    pendingRequests();
  }, []);

  return <div>Pending</div>;
};

export default Pending;
