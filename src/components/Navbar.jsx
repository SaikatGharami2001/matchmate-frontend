import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownPortal from "./DropdownPortal";
import { BASE_URL } from "../utils/constants";

import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [fadeAnim, setFadeAnim] = useState(false);
  const dropdownRef = useRef(null);

  const logoutUser = useAuthStore((state) => state.logoutUser);
  const user = useAuthStore((state) => state.user);

  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [logout, setLogout] = useState("");

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      logoutUser();
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

  const styles = {
    nav: "sticky top-0 z-[999999] isolate w-full border-b border-pink-600/20 bg-black/40 backdrop-blur-2xl shadow-[0_4px_30px_rgba(255,0,10,0.25)]",

    inner: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",

    brand:
      "text-3xl font-extrabold tracking-wide text-white hover:text-pink-500 transition duration-300",

    navLink:
      "relative text-lg font-semibold text-gray-300 hover:text-white transition tracking-wide",

    avatarWrapper:
      "w-11 h-11 rounded-full overflow-hidden border border-pink-600/50 hover:border-pink-500 transition cursor-pointer shadow-[0_0_12px_rgba(255,0,120,0.4)]",

    avatarInner:
      "w-11 h-11 rounded-full flex items-center justify-center text-xl font-extrabold bg-gradient-to-br from-pink-600 via-red-600 to-purple-700 text-white shadow-[0_0_18px_rgba(255,0,120,0.6)] border border-pink-400/ backdrop-blur-md animate-[pulse_2s_ease-in-out_infinite] relative overflow-hid",

    shine:
      "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent translate-y-[-100%] animate-[slideDown_3s_infinite]",

    dropdown: "space-y-2",

    dropdownFade: (fadeAnim) =>
      `z-[999999] w-56 p-4 rounded-2xl bg-[#0d0d0d] border border-pink-600/30 text-gray-200 shadow-[0_0_35px_rgba(255,0,140,0.35)] cursor-pointer transform transition-all duration-500 ease-in-out ${
        fadeAnim ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
      }`,

    logout:
      "block w-full text-left px-3 py-2 rounded-lg hover:bg-red-600/50 text-red-400 transition cursor-pointer",
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/dashboard" className={styles.brand}>
          MatchMate<span className="text-pink-600">❤️</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link to="/feed" className={styles.navLink}>
            Feed
          </Link>
          <Link to="/connections" className={styles.navLink}>
            Connections
          </Link>
          <Link to="/requests/pending" className={styles.navLink}>
            Requests
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </div>

        {/* AVATAR */}
        <div className="flex items-center gap-5 relative z-[9999]">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={handleAvatarClick}
              className={styles.avatarWrapper}
            >
              <div className={styles.avatarInner}>
                <span className="z-10 drop-shadow-sm">
                  {user && user.firstName[0]}
                </span>
                <div className={styles.shine}></div>
              </div>
            </button>

            {open && (
              <DropdownPortal>
                <div
                  style={{
                    position: "fixed",
                    top: coords.top,
                    left: coords.left,
                  }}
                  className={styles.dropdownFade(fadeAnim)}
                >
                  <ul className={styles.dropdown}>
                    <li>
                      <Link
                        to="/profile/edit"
                        className="block px-3 py-2 rounded-lg hover:bg-pink-600/30 transition"
                      >
                        Profile
                      </Link>
                    </li>

                    <div className="h-[1px] bg-white/10"></div>

                    <li>
                      <button onClick={handleLogout} className={styles.logout}>
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
