import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundParticles from "../components/BackgroundParticles";

const Body = () => {
  const location = useLocation();

  const fullScreenPages = [
    "/",
    "/login",
    "/signup",
    "/about",
    "/change-password",
  ];
  const hideLayout = fullScreenPages.includes(location.pathname);

  const styles = {
    outer:
      "relative flex flex-col min-h-screen overflow-hidden bg-[#0d0d11] bg-[radial-gradient(circle_at_center,rgba(255,0,102,0.12),transparent_65%)] text-white transition-all duration-300 ease-in-out",

    divider:
      "h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent",

    outlet:
      "flex flex-grow justify-center items-center px-4 py-8 animate-fade-in",
  };

  return (
    <div className={styles.outer}>
      <BackgroundParticles />

      {/* Navbar */}
      {!hideLayout && (
        <div className="animate-fade-in">
          <Navbar />
        </div>
      )}

      {/* Top divider */}
      {!hideLayout && <div className={styles.divider} />}

      <main className={styles.outlet}>
        <Outlet />
      </main>

      {/* Bottom divider */}
      {!hideLayout && <div className={styles.divider} />}

      {/* Dashboard footer */}
      {location.pathname === "/dashboard" && (
        <>
          <div className={styles.divider} />
          <div className="animate-fade-in">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
