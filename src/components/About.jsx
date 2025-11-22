const About = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-16 animate-fade-in">
      {/* TITLE */}
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,102,0.6)] mb-6">
        About MatchMate ❤️
      </h1>

      {/* SUBTITLE */}
      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed mb-12">
        MatchMate is more than just a dating platform. It’s a mission to
        redefine real connections. Built with precision, passion, and modern
        technology — created by{" "}
        <span className="font-semibold text-pink-500">Saikat Gharami</span>, a
        developer who believes that true engineering is not just writing code,
        but building experiences that touch lives.
      </p>

      {/* MISSION CARD */}
      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-[0_0_35px_rgba(255,0,120,0.25)] mb-16">
        <h2 className="text-3xl font-bold mb-4 text-pink-400">
          Our Mission 🎯
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          To bring people together through smart, authentic technology. Not
          swiping mindlessly — but connecting genuinely through beautifully
          designed UI, strong engineering, and modern AI matching.
        </p>
      </div>

      {/* TECH STACK */}
      <h3 className="text-3xl font-bold text-pink-400 mb-6">
        Tech Behind MatchMate ⚙️
      </h3>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {[
          "React.js",
          "Tailwind CSS",
          "Zustand",
          "Node.js",
          "Express",
          "MongoDB",
          "JWT Auth",
          "Axios",
        ].map((tech) => (
          <span
            key={tech}
            className="px-5 py-2 rounded-xl bg-white/10 border border-white/15 text-gray-200 text-sm font-semibold hover:border-pink-500 hover:text-pink-400 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* WHY ME SECTION */}
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-4xl font-extrabold text-pink-500 mb-4 drop-shadow-[0_0_20px_rgba(255,0,120,0.5)]">
          Why Hire Saikat? 🐺🔥
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I don’t build projects to finish tutorials. I build products that feel
          alive. I care about performance, design, user experience, and writing
          clean scalable code. I show up every day with discipline and hunger to
          grow — and this project is proof of that mindset.
        </p>
      </div>

      {/* CTA */}
      <button
        className="px-10 py-4 rounded-2xl font-bold text-xl bg-gradient-to-r from-pink-600 to-red-600
        hover:from-pink-700 hover:to-red-700 active:scale-95 transition-all shadow-lg shadow-red-500/30"
      >
        Let’s Build Something Great Together 🚀
      </button>
    </div>
  );
};

export default About;
