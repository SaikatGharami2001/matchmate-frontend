const Profile = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden
      bg-gradient-to-br from-[#050208] via-[#12000a] to-[#01030a] px-4"
    >
      {/* floating hearts bg */}
      <FloatingHearts />

      {/* layered glows */}
      <div className="absolute w-[650px] h-[650px] bg-pink-600/20 blur-[200px] top-[-200px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-red-500/15 blur-[180px] bottom-[-180px] right-[-140px]" />

      <div
        className="relative w-full max-w-3xl backdrop-blur-2xl bg-white/5 rounded-3xl border border-white/10
        shadow-[0_0_120px_-20px_rgba(255,0,120,0.45)] px-10 py-12"
      >
        {/* profile image */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-red-400
              p-1 shadow-[0_0_25px_rgba(255,0,120,0.5)]"
            >
              <div className="w-full h-full rounded-full bg-black/60 flex items-center justify-center text-white text-xl">
                Add Pic
              </div>
            </div>
            <button
              className="absolute bottom-1 right-1 px-3 py-1 rounded-full text-xs font-semibold
              bg-gradient-to-r from-pink-600 to-red-500 text-white shadow-lg"
            >
              Edit
            </button>
          </div>

          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 mt-4">
            Edit Your Profile
          </h2>

          <p className="text-slate-300 text-sm mt-1">
            Let your profile shine and attract perfect matches
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Password" type="password" />
          <Input label="Age" type="number" />
        </div>

        <div className="mt-6">
          <label className="text-sm text-pink-300 font-medium">Gender</label>
          <select
            className="w-full mt-1 py-3 px-4 bg-black/30 border border-white/10 rounded-xl text-white
            outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          >
            <option className="text-black">Select Gender</option>
            <option className="text-black">Male</option>
            <option className="text-black">Female</option>
            <option className="text-black">Custom</option>
          </select>
        </div>

        {/* action buttons */}
        <div className="flex gap-4 mt-12">
          <button
            className="flex-1 py-4 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r
            from-pink-600 to-red-500 shadow-[0_0_35px_rgba(255,0,120,0.5)]
            hover:scale-[1.05] active:scale-[0.97] transition-all"
          >
            Save Changes
          </button>

          <button
            className="flex-1 py-4 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r
            from-red-800 to-red-900 shadow-[0_0_35px_rgba(255,0,80,0.45)]
            hover:scale-[1.05] active:scale-[0.97] transition-all"
          >
            Delete Account ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

/// INPUT Component
const Input = ({ label, type = "text" }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-pink-300 font-medium">{label}</label>
    <input
      type={type}
      className="w-full py-3 px-4 rounded-xl bg-black/30 border border-white/10 text-white
      outline-none focus:ring-2 focus:ring-pink-500 transition-all"
    />
  </div>
);

/// Floating Hearts Component
const FloatingHearts = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="absolute text-pink-400 opacity-20 animate-[float_6s_ease-in-out_infinite]"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 24 + 12}px`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      >
        ❤️
      </div>
    ))}
  </div>
);
