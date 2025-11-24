import React, { useState } from "react";

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: "Saikat" },
    { id: 2, name: "Ayesha" },
    { id: 3, name: "Priya" },
    { id: 4, name: "Neha" },
  ];

  return (
    <>
      <div className="w-full h-[85vh] rounded-2xl overflow-hidden bg-transparent backdrop-blur-xl shadow-[0_0_45px_rgba(255,0,150,0.25)] flex border border-pink-600/30">
        {/* Sidebar */}
        <aside className="w-[20%] bg-black/20 backdrop-blur-2xl border-r border-pink-500/30 p-4 flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold text-white tracking-wide">
            Messages
          </h2>

          <div className="flex flex-col gap-3 overflow-y-auto mt-2 pr-2">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`cursor-pointer flex items-center gap-4 p-2 rounded-xl transition-all duration-200
                  ${
                    selectedUser?.id === user.id
                      ? "bg-pink-600/30 text-white"
                      : "text-gray-300 hover:bg-pink-600/10"
                  }`}
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#09090b] border-2 border-pink-600 flex items-center justify-center text-xl font-extrabold text-white">
                  {user.name[0].toUpperCase()}
                </div>

                <p className="font-bold text-lg tracking-wide">{user.name}</p>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat  */}
        <section className="flex-1 flex flex-col relative bg-gradient-to-br from-pink-600/10 via-purple-700/10 to-transparent animate-[pulse_6s_ease-in-out_infinite]">
          {/* Header */}
          <div className="h-20 border-b border-pink-500/30 px-8 flex items-center gap-4 backdrop-blur-2xl bg-black/20 backdrop-blur-2xl/60">
            {selectedUser ? (
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#09090b] border-2 border-pink-600 flex items-center justify-center text-xl font-extrabold text-white">
                  {selectedUser.name[0].toUpperCase()}
                </div>
                <h1 className="text-2xl font-extrabold text-white tracking-wide">
                  {selectedUser.name}
                </h1>
              </div>
            ) : (
              <h1 className="text-xl font-bold text-gray-400">
                Select Someone To Start Chatting
              </h1>
            )}
          </div>

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
          <div className="h-20 border-t border-pink-500/30 px-6 flex items-center gap-3 bg-black/25 backdrop-blur-2xl backdrop-blur-xl">
            <input
              disabled={!selectedUser}
              className="flex-1 px-5 py-3 rounded-2xl bg-black/30 backdrop-blur-3xl border border-neutral-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder={
                selectedUser ? "Message…" : "Select a user to start chatting"
              }
            />
            <button
              disabled={!selectedUser}
              className="px-6 py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 font-bold text-white disabled:opacity-40 transition"
            >
              Send
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Messages;
