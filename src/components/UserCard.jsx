import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useFeedStore } from "../store/useFeedStore";

const UserCard = ({
  _id,
  firstName,
  lastName,
  age,
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
    } finally {
      console.log("Request finished");
    }
  };

  return (
    <div className="w-[420px] h-[520px] mx-auto bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(255,20,147,0.3)] rounded-3xl flex flex-col overflow-hidden">
      <div className="h-[60%] w-full bg-gray-700">
        <img
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-2 py-2 px-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          {firstName} {lastName}, <span className="text-pink-300">{age}</span>
        </h2>

        <p className="text-sm text-gray-300">
          Coffee lover ☕ | Fitness 🏋️‍♀️ | Looking for real vibe
        </p>

        <div className="flex gap-6 mt-1 text-white font-semibold text-sm">
          <span>📏 5'6</span>
          <span>🏋️ 56kg</span>
          <span>📍 3km away</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {mode === "feed" ? (
            <>
              {/* Ignore */}
              <button
                onClick={() => handleSendRequest("ignored", _id)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition hover:bg-blue-700 active:scale-90 active:opacity-70"
              >
                Ignore
              </button>

              {/* Interested */}
              <button
                onClick={() => handleSendRequest("interested", _id)}
                className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold transition hover:opacity-80 active:scale-90 active:opacity-70"
              >
                Interested
              </button>
            </>
          ) : (
            <>
              {/* Reject */}
              <button
                onClick={() => rejectRequest(requestId)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-semibold transition active:scale-90 active:opacity-70"
              >
                Reject
              </button>

              {/* Accept */}
              <button
                onClick={() => acceptRequest(requestId)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition active:scale-90 active:opacity-70"
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
