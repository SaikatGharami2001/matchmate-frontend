import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="backdrop-blur-lg bg-gradient-to-r from-gray-900/70 via-black/60 to-gray-900/70 border-b border-white/10 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide hover:scale-105 transition-all duration-300"
        >
          MatchMate ❤️
        </Link>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search users…"
            className="px-4 py-2 rounded-xl bg-gray-800/60 border border-white/10 focus:ring-2 focus:ring-pink-500 outline-none text-sm placeholder-gray-400 transition-all"
          />

          {/* PROFILE DROPDOWN */}
          <div className="relative group">
            <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-pink-500/50 cursor-pointer hover:ring-red-500/70 transition-all">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="object-cover w-full h-full"
              />
            </div>

            {/* DROPDOWN MENU */}
            <ul className="absolute right-0 mt-3 w-48 p-3 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
              <li>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-lg hover:bg-pink-600/30 transition-all"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="block px-3 py-2 rounded-lg hover:bg-pink-600/30 transition-all"
                >
                  Settings
                </Link>
              </li>
              <li>
                <button className="block w-full text-left px-3 py-2 rounded-lg hover:bg-red-600/40 transition-all text-red-400">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
