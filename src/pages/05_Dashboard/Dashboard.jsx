import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);

  const styles = {
    outerDiv:
      "relative z-10 min-h-screen w-full text-white flex flex-col px-6 py-10",

    heading:
      "text-4xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide pointer-events-auto",

    subHeading:
      "text-center text-gray-400 mt-3 mb-10 text-lg pointer-events-auto",

    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pointer-events-auto",

    card: "p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(255,0,130,0.45)] transition-all pointer-events-auto",

    cardTitle: "text-2xl font-bold mb-2 text-pink-400",

    cardDesc: "text-gray-300 text-sm",

    footerText:
      "text-center text-gray-500 mt-12 text-sm tracking-wide pointer-events-auto",
  };

  return (
    <div className={styles.outerDiv}>
      {user && (
        <h1 className={styles.heading}>Welcome back, {user.firstName}</h1>
      )}

      <p className={styles.subHeading}>
        Your journey to meaningful connections starts here
      </p>

      <div className={styles.grid}>
        <Link to="/feed" className={styles.card}>
          <h2 className={styles.cardTitle}>Feed</h2>
          <p className={styles.cardDesc}>Discover new profiles near you</p>
        </Link>

        <Link to="/connections" className={styles.card}>
          <h2 className={styles.cardTitle}>Connections</h2>
          <p className={styles.cardDesc}>Stay connected and chat</p>
        </Link>

        <Link to="/requests/pending" className={styles.card}>
          <h2 className={styles.cardTitle}>Requests</h2>
          <p className={styles.cardDesc}>Check your friend requests</p>
        </Link>

        <Link to="/profile/edit" className={styles.card}>
          <h2 className={styles.cardTitle}>Profile</h2>
          <p className={styles.cardDesc}>Manage your info & preferences</p>
        </Link>

        <Link to="/about" className={styles.card}>
          <h2 className={styles.cardTitle}>About</h2>
          <p className={styles.cardDesc}>About Saikat Gharami</p>
        </Link>
      </div>

      <p className={styles.footerText}>
        Build connections that matter — Match with purpose.
      </p>
    </div>
  );
};

export default Dashboard;
