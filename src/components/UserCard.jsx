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

  const styles = {
    card: "w-[380px] h-[520px] mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_30px_rgba(255,20,147,0.35)] hover:shadow-[0_0_45px_rgba(255,20,147,0.5)] transition-all duration-300 hover:scale-[1.03] overflow-hidden",

    imageWrapper: "relative h-[58%] w-full",

    gradientOverlay:
      "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent",

    content: "flex flex-col items-center px-5 py-4 text-center",

    name: "text-xl font-bold text-white tracking-wide",

    email: "text-sm text-gray-300 mt-1",

    tag: "px-3 py-[3px] text-xs bg-white/10 text-gray-200 rounded-md",

    buttons: "flex gap-4 mt-5",

    btnIgnored:
      "px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold active:scale-95 transition cursor-pointer",

    btnInterested:
      "px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition cursor-pointer",

    btnReject:
      "px-6 py-2 rounded-full bg-gray-600 hover:bg-gray-700 text-white text-sm font-semibold active:scale-95 transition cursor-pointer",

    btnAccept:
      "px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold active:scale-95 transition cursor-pointer",
  };

  return (
    <div className={styles.card}>
      {/* IMAGE */}
      <div className={styles.imageWrapper}>
        <img
          src="https://t3.ftcdn.net/jpg/09/42/81/86/360_F_942818656_NZjjC6PWE3FlWfhpNUGwyKD9yfJxTFB1.jpg"
          className="w-full h-full object-cover"
          alt="profile"
        />
        <div className={styles.gradientOverlay} />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <h2 className={styles.name}>
          {firstName} {lastName}
        </h2>

        {email && <p className={styles.email}>{email}</p>}

        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          <span className={styles.tag}>Age: {age || "N/A"}</span>
          <span className={styles.tag}>Gender: {gender || "N/A"}</span>
          <span className={styles.tag}>Job: {job || "N/A"}</span>
        </div>

        {/* BUTTONS */}
        <div className={styles.buttons}>
          {mode === "feed" ? (
            <>
              <button
                onClick={() => handleSendRequest("ignored", _id)}
                className={styles.btnIgnored}
              >
                Ignore
              </button>

              <button
                onClick={() => handleSendRequest("interested", _id)}
                className={styles.btnInterested}
              >
                Interested
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => rejectRequest(requestId)}
                className={styles.btnReject}
              >
                Reject
              </button>

              <button
                onClick={() => acceptRequest(requestId)}
                className={styles.btnAccept}
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
