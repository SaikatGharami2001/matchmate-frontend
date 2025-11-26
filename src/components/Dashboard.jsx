import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="relative z-10 min-h-screen w-full text-white flex flex-col px-6 py-10">
      {/* HEADER */}

      {user && (
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide pointer-events-auto">
          Welcome back, {user.firstName}
        </h1>
      )}

      <p className="text-center text-gray-400 mt-3 mb-10 text-lg pointer-events-auto">
        Your journey to meaningful connections starts here
      </p>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pointer-events-auto">
        {/* CARD 1 */}
        <Link
          to="/feed"
          className="p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 
          hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(255,0,130,0.45)] transition-all pointer-events-auto"
        >
          <h2 className="text-2xl font-bold mb-2 text-pink-400">Feed</h2>
          <p className="text-gray-300 text-sm">
            Discover new profiles near you
          </p>
        </Link>

        {/* CARD 2 */}
        <Link
          to="/connections"
          className="p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 
          hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(255,0,130,0.45)] transition-all pointer-events-auto"
        >
          <h2 className="text-2xl font-bold mb-2 text-pink-400">Connections</h2>
          <p className="text-gray-300 text-sm">Stay connected and chat</p>
        </Link>

        {/* CARD 2 */}
        <Link
          to="/messages"
          className="p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 
          hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(255,0,130,0.45)] transition-all pointer-events-auto"
        >
          <h2 className="text-2xl font-bold mb-2 text-pink-400">Messages</h2>
          <p className="text-gray-300 text-sm">Stay connected and chat</p>
        </Link>

        {/* CARD 3 */}
        <Link
          to="/profile"
          className="p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 
          hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(255,0,130,0.45)] transition-all pointer-events-auto"
        >
          <h2 className="text-2xl font-bold mb-2 text-pink-400">Profile</h2>
          <p className="text-gray-300 text-sm">
            Manage your info & preferences
          </p>
        </Link>
      </div>

      {/* FOOTER TEXT */}
      <p className="text-center text-gray-500 mt-12 text-sm tracking-wide pointer-events-auto">
        Build connections that matter — Match with purpose.
      </p>
    </div>
  );
};

export default Dashboard;
