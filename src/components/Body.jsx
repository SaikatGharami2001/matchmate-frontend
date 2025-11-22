import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundParticles from "../components/BackgroundParticles";

const Body = () => {
  const location = useLocation();

  // All routes that should hide navbar + footer
  const fullScreenPages = ["/", "/login", "/register", "/about"];
  const hideLayout = fullScreenPages.includes(location.pathname);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-[#0d0d11] bg-[radial-gradient(circle_at_center,rgba(255,0,102,0.12),transparent_65%)] text-white transition-all duration-300 ease-in-out">
      <BackgroundParticles />

      {/* Navbar condition */}
      {!hideLayout && (
        <div className="animate-fade-in">
          <Navbar />
        </div>
      )}

      {/* Top divider only if navbar visible */}
      {!hideLayout && (
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
      )}

      <main className="flex flex-grow justify-center items-center px-4 py-8 animate-fade-in">
        <Outlet />
      </main>

      {/* Bottom divider only if footer visible */}
      {!hideLayout && (
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
      )}

      {!hideLayout && (
        <div className="animate-fade-in">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Body;
