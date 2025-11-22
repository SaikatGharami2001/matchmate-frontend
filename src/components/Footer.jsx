const Footer = () => {
  return (
    <footer
      className="
      fixed bottom-0 w-full
      backdrop-blur-xl bg-gradient-to-r from-gray-900/70 via-black/60 to-gray-900/70
      border-t border-white/10
      text-gray-300
      flex justify-center
      py-4 px-6
      shadow-[0_-4px_20px_rgba(255,20,147,0.25)]
      animate-fade-in
      z-50
    "
    >
      <p className="text-sm tracking-wide hover:text-pink-400 transition-all duration-300">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-pink-500">MatchMate</span> — Made
        with ❤️ & Passion
      </p>
    </footer>
  );
};

export default Footer;
