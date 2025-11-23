import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DropdownPortal from "./DropdownPortal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [fadeAnim, setFadeAnim] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [logout, setLogout] = useState("");

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:1111/logout",
        {},
        { withCredentials: true }
      );
      navigate("/");
      setLogout("Logout Successful 🎉");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleAvatarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      top: rect.bottom + 8,
      left: rect.right - 224,
    });

    setOpen(true);
    setFadeAnim(true);

    setTimeout(() => setFadeAnim(false), 2200); // begin fading
    setTimeout(() => setOpen(false), 2600); // remove after fade ends
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setFadeAnim(false);
        setTimeout(() => setOpen(false), 400);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navItems = ["Feed", "Likes", "Messages", "About"];

  return (
    <nav className="sticky top-0 z-[999999] isolate w-full border-b border-pink-600/20 bg-black/40 backdrop-blur-2xl shadow-[0_4px_30px_rgba(255,0,130,0.25)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/dashboard"
          className="text-3xl font-extrabold tracking-wide text-white hover:text-pink-500 transition duration-300"
        >
          MatchMate<span className="text-pink-600">❤️</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              to={
                item.toLowerCase() === "feed"
                  ? "/dashboard"
                  : `/${item.toLowerCase()}`
              }
              className="relative text-lg font-semibold text-gray-300 hover:text-white transition tracking-wide"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5 relative z-[9999]">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-40 md:w-64 bg-neutral-900 text-gray-200 border border-neutral-700 rounded-xl placeholder-gray-500 focus:border-pink-600 focus:ring-2 focus:ring-pink-600 transition"
          />

          <div ref={dropdownRef} className="relative">
            <button
              onClick={handleAvatarClick}
              className="w-11 h-11 rounded-full overflow-hidden border border-pink-600/50 hover:border-pink-500 transition cursor-pointer shadow-[0_0_12px_rgba(255,0,120,0.4)]"
            >
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="user"
                className="object-cover w-full h-full"
              />
            </button>

            {open && (
              <DropdownPortal>
                <div
                  style={{
                    position: "fixed",
                    top: coords.top,
                    left: coords.left,
                  }}
                  className={`z-[999999] w-56 p-4 rounded-2xl bg-[#0d0d0d] border border-pink-600/30 text-gray-200 shadow-[0_0_35px_rgba(255,0,140,0.35)] cursor-pointer
                  transform transition-all duration-500 ease-in-out
                  ${
                    fadeAnim
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-3"
                  }`}
                >
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-3 py-2 rounded-lg hover:bg-pink-600/30 transition"
                      >
                        Profile
                      </Link>
                    </li>

                    <div className="h-[1px] bg-white/10"></div>

                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-3 py-2 rounded-lg hover:bg-red-600/50 text-red-400 transition cursor-pointer"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </DropdownPortal>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
