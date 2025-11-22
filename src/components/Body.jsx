import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundParticles from "../components/BackgroundParticles";

const Body = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/about";

  return (
    <div
      className="relative min-h-screen overflow-hidden 
      bg-[#0d0d11] 
      bg-[radial-gradient(circle_at_center,rgba(255,0,102,0.12),transparent_65%)] 
      text-white transition-all"
    >
      <BackgroundParticles />

      {!hideLayout && <Navbar />}

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

      <main
        className="px-4 py-10 min-h-[calc(100vh-120px)]
        animate-fade-in"
      >
        <Outlet />
      </main>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

      {!hideLayout && <Footer />}
    </div>
  );
};

export default Body;
