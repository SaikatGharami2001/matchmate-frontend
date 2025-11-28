import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useFeedStore } from "../store/useFeedStore";

const UserCard = ({
  _id,
  firstName,
  lastName,
  age,
  gender,
  job,
  email,
  mode = "feed",
  acceptRequest,
  rejectRequest,
  requestId,
}) => {
  const removeUserFromFeed = useFeedStore((state) => state.removeUserFromFeed);

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );

      removeUserFromFeed(userId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="
      w-[380px] h-[520px] mx-auto 
      bg-white/10 backdrop-blur-xl 
      border border-white/10 
      rounded-3xl shadow-[0_0_30px_rgba(255,20,147,0.35)]
      hover:shadow-[0_0_45px_rgba(255,20,147,0.5)]
      transition-all duration-300 hover:scale-[1.03]
      overflow-hidden
    "
    >
      {/* IMAGE */}
      <div className="relative h-[58%] w-full">
        <img
          src="https://t3.ftcdn.net/jpg/09/42/81/86/360_F_942818656_NZjjC6PWE3FlWfhpNUGwyKD9yfJxTFB1.jpg"
          className="w-full h-full object-cover"
          alt="profile"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      <div className="flex flex-col items-center px-5 py-4 text-center">
        <h2 className="text-xl font-bold text-white tracking-wide">
          {firstName} {lastName}
        </h2>

        {email && <p className="text-sm text-gray-300 mt-1">{email}</p>}

        <div className="flex flex-wrap justify-center gap-2 mt-3">
          <span className="px-3 py-[3px] text-xs bg-white/10 text-gray-200 rounded-md">
            Age: {age || "N/A"}
          </span>

          <span className="px-3 py-[3px] text-xs bg-white/10 text-gray-200 rounded-md">
            Gender: {gender || "N/A"}
          </span>

          <span className="px-3 py-[3px] text-xs bg-white/10 text-gray-200 rounded-md">
            Job: {job || "N/A"}
          </span>
        </div>

        <div className="flex gap-4 mt-5">
          {mode === "feed" ? (
            <>
              <button
                onClick={() => handleSendRequest("ignored", _id)}
                className="px-6 py-2 rounded-full bg-blue-600 
                hover:bg-blue-700 text-white text-sm font-semibold 
                active:scale-95 transition cursor-pointer"
              >
                Ignore
              </button>

              <button
                onClick={() => handleSendRequest("interested", _id)}
                className="px-6 py-2 rounded-full bg-gradient-to-r 
                from-pink-500 to-red-600 text-white font-semibold text-sm 
                hover:opacity-90 active:scale-95 transition cursor-pointer"
              >
                Interested
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => rejectRequest(requestId)}
                className="px-6 py-2 rounded-full bg-gray-600 hover:bg-gray-700 
                text-white text-sm font-semibold active:scale-95 transition cursor-pointer"
              >
                Reject
              </button>

              <button
                onClick={() => acceptRequest(requestId)}
                className="px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 
                text-white text-sm font-semibold active:scale-95 transition cursor-pointer"
              >
                Accept
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
