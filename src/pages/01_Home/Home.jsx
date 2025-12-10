import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    outerDiv:
      "flex flex-col items-center justify-center text-center h-full animate-fade-in",

    heading:
      "text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,102,0.6)]",

    button:
      "px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 active:scale-95 transition-all shadow-lg shadow-red-500/30 animate-glow",

    text: "mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed",

    buttonSecondary:
      "px-8 py-4 rounded-2xl font-semibold text-lg bg-white/10 border border-white/20 backdrop-blur-lg hover:border-pink-500/40 hover:text-pink-400 transition-all",
  };

  return (
    <div className={styles.outerDiv}>
      <h1 className={styles.heading}>Find Your Perfect Match ❤️</h1>

      <p className={styles.text}>
        Connect with real people around you. Smart matching powered by modern
        AI, beautiful design, and real emotions. Love deserves better
        technology.
      </p>

      <div className="mt-10 flex gap-4">
        <button onClick={() => navigate("/login")} className={styles.button}>
          Get Started
        </button>

        <Link to="/about" className={styles.buttonSecondary}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
