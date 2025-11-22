import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navItems = ["Feed", "Likes", "Messages", "About"];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-pink-600/20 bg-black/40 backdrop-blur-2xl shadow-[0_4px_30px_rgba(255,0,130,0.25)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide text-white hover:text-pink-500 transition duration-300"
        >
          MatchMate<span className="text-pink-600">❤️</span>
        </Link>

        {/* CENTER NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              to={
                item.toLowerCase() === "feed" ? "/" : `/${item.toLowerCase()}`
              }
              className="relative text-lg font-semibold text-gray-300 hover:text-white transition tracking-wide"
            >
              {item}
              {pathname === `/${item.toLowerCase()}` ||
              (pathname === "/" && item === "Feed") ? (
                <span className="absolute left-1/2 -bottom-2 h-[2px] w-10 -translate-x-1/2 bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 shadow-[0_0_15px_rgba(255,0,130,0.9)] rounded-full animate-[underline_0.3s_ease-out]"></span>
              ) : (
                <span className="absolute left-1/2 -bottom-2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 rounded-full transition-all duration-300 group-hover:w-10"></span>
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-40 md:w-64 bg-neutral-900/70 text-gray-200 border border-neutral-700 rounded-xl placeholder-gray-500 focus:border-pink-600 focus:ring-2 focus:ring-pink-600 transition"
          />

          {/* AVATAR DROPDOWN */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-11 h-11 rounded-full overflow-hidden border border-pink-600/50 hover:border-pink-500 transition cursor-pointer shadow-[0_0_12px_rgba(255,0,120,0.4)]"
            >
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="user"
                className="object-cover w-full h-full"
              />
            </button>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute right-0 mt-3 w-56 p-4 rounded-2xl bg-neutral-900/95 border border-pink-600/20 text-gray-200 backdrop-blur-xl shadow-[0_0_25px_rgba(255,0,130,0.35)] animate-[fadeScale_0.25s_ease-out]">
                <ul className="space-y-2">
                  <li>
                    <Link className="block px-3 py-2 rounded-lg hover:bg-pink-600/30 transition">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-3 py-2 rounded-lg hover:bg-pink-600/30 transition">
                      Settings
                    </Link>
                  </li>
                  <div className="h-[1px] bg-white/10"></div>
                  <li>
                    <button className="block w-full text-left px-3 py-2 rounded-lg hover:bg-red-600/40 text-red-400 transition">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
