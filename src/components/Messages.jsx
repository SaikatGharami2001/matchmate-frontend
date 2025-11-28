import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useConnectionStore } from "../store/useConnectionStore ";
import { useAuthStore } from "../store/useAuthStore";

import { createSocketConnection } from "../utils/socket";

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const { targetUserId } = useParams();

  const connections = useConnectionStore((state) => state.connections);
  const user = useAuthStore((state) => state.user);

  const userId = user._id;

  useEffect(() => {
    const socket = createSocketConnection();
    socket.emit("join", { userId, targetUserId });
  }, []);

  return (
    <div
      className="w-full h-[85vh] rounded-3xl overflow-hidden 
                    bg-white/5 backdrop-blur-2xl border border-pink-500/20 
                    shadow-[0_0_40px_rgba(255,0,150,0.25)] flex"
    >
      {/* Sidebar */}
      <aside className="w-[22%] bg-black/30 border-r border-pink-500/30 p-5 flex flex-col gap-6 backdrop-blur-2xl">
        <h2
          className="text-3xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-pink-500 to-yellow-400 tracking-wide drop-shadow-lg"
        >
          Messages
        </h2>

        <div className="flex flex-col gap-4 overflow-y-auto pr-2">
          {connections.length === 0 && (
            <p className="text-gray-400 text-center mt-4 text-lg opacity-50">
              No connections yet
            </p>
          )}

          {connections.map((user) => (
            <div
              key={user._id}
              onClick={() => {
                setSelectedUser(user);
                navigate(`/messages/${user._id}`);
              }}
              className={`cursor-pointer flex items-center gap-4 p-3 rounded-2xl transition-all duration-200
                ${
                  selectedUser?._id === user._id
                    ? "bg-gradient-to-r from-pink-600/40 to-yellow-500/30 text-white shadow-[0_0_20px_rgba(255,80,200,0.5)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
            >
              <div
                className="w-12 h-12 rounded-full bg-black/40 
                              border-2 border-pink-600 flex items-center justify-center 
                              text-xl font-extrabold text-white shadow-[0_0_15px_rgba(255,0,150,0.4)]"
              >
                {user.firstName[0]}
              </div>

              <p className="font-semibold text-lg tracking-wide">
                {user.firstName} {user.lastName}
              </p>
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Section */}
      <section
        className="flex-1 flex flex-col relative 
                          bg-gradient-to-br from-pink-600/10 via-purple-800/10 to-black/10 
                          animate-[pulse_6s_ease-in-out_infinite]"
      >
        {/* Header */}
        <div
          className="h-20 border-b border-pink-500/30 px-8 flex items-center gap-4 
                        bg-black/20 backdrop-blur-2xl"
        >
          {selectedUser ? (
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-black/40 border-2 border-pink-600 
                              flex items-center justify-center text-xl font-extrabold text-white 
                              shadow-[0_0_15px_rgba(255,0,150,0.4)]"
              >
                {selectedUser.firstName[0]}
              </div>
              <h1 className="text-2xl font-extrabold text-white tracking-wide">
                {selectedUser.firstName} {selectedUser.lastName}
              </h1>
            </div>
          ) : (
            <h1 className="text-xl font-bold text-gray-400">
              Select Someone To Start Chatting
            </h1>
          )}
        </div>

        {/* Messages Area */}
        <div className="flex-1 px-8 py-6 overflow-y-auto space-y-4">
          {!selectedUser && (
            <div className="h-full flex items-center justify-center">
              <p className="opacity-40 text-lg text-gray-300 text-center">
                Nothing here yet — choose someone and start a conversation 💬
              </p>
            </div>
          )}
        </div>

        {/* Input */}
        <div
          className="h-20 border-t border-pink-500/30 px-6 flex items-center gap-3 
                        bg-black/30 backdrop-blur-xl"
        >
          <input
            disabled={!selectedUser}
            className="flex-1 px-5 py-3 rounded-2xl bg-black/40 
                       border border-neutral-700 text-gray-200 
                       placeholder-gray-500 focus:ring-2 focus:ring-pink-500 outline-none"
            placeholder={
              selectedUser
                ? `Message ${selectedUser.firstName}…`
                : "Select a user to start chatting"
            }
          />

          <button
            disabled={!selectedUser}
            className="px-6 py-3 rounded-2xl font-bold text-white 
                       bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                       shadow-[0_0_20px_rgba(255,80,200,0.5)]
                       hover:shadow-[0_0_30px_rgba(255,80,200,0.7)]
                       hover:opacity-90 active:scale-95 
                       disabled:opacity-30 transition-all duration-200"
          >
            Send
          </button>
        </div>
      </section>
    </div>
  );
};

export default Messages;
