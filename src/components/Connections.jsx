import { useEffect } from "react";
import { useConnectionStore } from "../store/useConnectionStore ";
import { useNavigate } from "react-router-dom";

const Connections = () => {
  const navigate = useNavigate();
  const { connections, fetchConnections } = useConnectionStore();

  useEffect(() => {
    fetchConnections();
  }, []);

  if (connections.length === 0)
    return (
      <h1 className="text-center text-gray-400 mt-16 text-2xl font-semibold tracking-wide">
        No Connections Found
      </h1>
    );

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 py-12 px-4">
      {/* Heading */}
      <h1
        className="text-4xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-pink-500 to-red-400 tracking-wide drop-shadow-lg"
      >
        Your Connections ❤️
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {connections.map(({ firstName, lastName, age, gender, _id }) => (
          <div
            key={_id}
            className="w-80 bg-white/10 backdrop-blur-xl p-6 rounded-2xl text-center text-white
                       border border-white/10 shadow-[0_0_25px_rgba(255,0,128,0.2)]
                       hover:shadow-[0_0_35px_rgba(255,0,128,0.4)] 
                       hover:scale-[1.04] transition-all duration-300"
          >
            {/* Avatar Circle */}
            <div
              className="w-24 h-24 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 
                         rounded-full mx-auto flex items-center justify-center text-4xl font-bold 
                         shadow-[0_0_20px_rgba(255,80,200,0.5)]"
            >
              {firstName[0]}
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold mt-4 tracking-wide">
              {firstName} {lastName}
            </h2>

            {/* Details */}
            <p className="text-gray-300 text-sm mt-1">
              {age || "Age N/A"} • {gender || "Gender N/A"}
            </p>

            {/* Chat Button */}
            <button
              onClick={() => navigate(`/messages/${_id}`)}
              className="mt-5 w-full py-2 rounded-full font-semibold text-white 
                         bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                         shadow-[0_0_20px_rgba(255,80,200,0.5)]
                         hover:shadow-[0_0_30px_rgba(255,80,200,0.7)]
                         hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              Chat 💬
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
