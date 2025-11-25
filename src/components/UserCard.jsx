import React from "react";

const UserCard = () => {
  return (
    <div className="w-[480px] h-[560px] mx-auto bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(255,20,147,0.3)] rounded-3xl flex flex-col overflow-hidden">
      {/* Top Image */}
      <div className="h-[65%] w-full bg-gray-700">
        <img
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-2 py-2 px-4">
        <h2 className="text-2xl font-bold text-white">Aisha, 22</h2>
        <p className="text-sm text-gray-300">
          Coffee lover ☕ | Fitness 🏋️‍♀️ | Looking for real vibe
        </p>

        {/* Stats */}
        <div className="flex gap-6 mt-2 text-white font-semibold text-sm">
          <span>📏 5'6</span>
          <span>🏋️ 56kg</span>
          <span>📍 3km away</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition cursor-pointer">
            Ignore
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-80 transition cursor-pointer">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
