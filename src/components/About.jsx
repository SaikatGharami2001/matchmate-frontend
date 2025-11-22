const milestones = [
  {
    year: "2019",
    title: "First lines of code",
    description:
      "Started exploring programming and the idea of building things on the internet.",
  },
  {
    year: "2021",
    title: "Web development foundations",
    description:
      "Learned HTML, CSS and JavaScript and built small projects to understand the basics.",
  },
  {
    year: "2022",
    title: "MERN & real projects",
    description:
      "Got serious with React, Node.js and MongoDB. Built projects like StudySync and an e-commerce site.",
  },
  {
    year: "2023",
    title: "Discipline & mindset shift",
    description:
      "Started strength training, fixed habits, and treated coding like a craft instead of a hobby.",
  },
  {
    year: "2024",
    title: "MatchMate is born",
    description:
      "Designed and built MatchMate from scratch to showcase product thinking, UI skills and clean architecture.",
  },
  {
    year: "2025",
    title: "Ready for the next level",
    description:
      "Preparing to join a team as a React / MERN developer and ship production-grade products every day.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-20 space-y-24 animate-fade-in">
      {/* TITLE */}
      <section className="max-w-4xl space-y-6 animate-pop">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,0,120,0.35)]">
          About MatchMate ❤️
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed animate-fade-in [animation-delay:200ms]">
          MatchMate is more than just a demo project — it’s a carefully crafted
          production-style application focused on clean architecture,
          performance and stunning UI. Built by{" "}
          <span className="font-semibold text-pink-500">Saikat Gharami</span>,
          who believes real engineering means creating experiences that feel
          alive and meaningful.
        </p>
      </section>

      {/* MISSION */}
      <section className="max-w-4xl w-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-[0_0_50px_rgba(255,0,120,0.25)] space-y-6 animate-pop [animation-delay:250ms]">
        <h2 className="text-3xl font-bold text-pink-400 drop-shadow-[0_0_25px_rgba(255,0,140,0.6)]">
          Mission 🎯
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Dating apps shouldn’t feel like slot machines. MatchMate focuses on
          intentional and meaningful connections with premium interface design,
          smooth UX, and a strong emotional identity.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="max-w-4xl space-y-6 animate-fade-in [animation-delay:350ms]">
        <h3 className="text-3xl font-bold text-pink-400">
          Tech Behind MatchMate ⚙️
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React.js",
            "React Router",
            "Tailwind CSS",
            "DaisyUI",
            "Zustand",
            "Node.js",
            "Express",
            "MongoDB",
            "REST APIs",
            "JWT Auth",
            "Axios",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-gray-200 text-sm font-semibold hover:border-pink-500 hover:text-pink-400 transition-all animate-pop"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl w-full text-left space-y-10 animate-fade-in [animation-delay:450ms]">
        <h3 className="text-4xl font-bold text-pink-400 text-center drop-shadow-[0_0_18px_rgba(255,0,120,0.5)]">
          Saikat&apos;s Journey 🐺
        </h3>

        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          Years of discipline, improvement, consistency & vision. Every step
          built the version of myself creating MatchMate today.
        </p>

        <div className="mt-6 grid md:grid-cols-[0.35fr,1fr] gap-10">
          <div className="hidden md:flex flex-col justify-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              From beginner curiosity to dedicated creator — mastering frontend,
              backend, UI/UX, performance and real product thinking.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-pink-500 via-red-500 to-transparent opacity-80" />

            <div className="space-y-10">
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className="relative pl-12 animate-fade-in [animation-delay:300ms]"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_25px_rgba(255,0,120,0.8)] animate-heartbeat" />

                  <div className="inline-flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold tracking-widest text-gray-400">
                      {item.year}
                    </span>
                    {index === milestones.length - 1 && (
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-pink-500/20 border border-pink-500/60 text-pink-300 uppercase tracking-wide">
                        Present
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-100">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed opacity-90">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl text-center space-y-6 animate-pop [animation-delay:600ms]">
        <h2 className="text-4xl font-extrabold text-pink-500 drop-shadow-[0_0_25px_rgba(255,0,120,0.7)]">
          Why Hire Saikat? 🔥
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I build real products — not tutorial projects. I obsess over polish,
          detail, structure and user experience. MatchMate reflects my mindset
          of quality, discipline and execution.
        </p>
        <p className="text-gray-400 text-sm">
          If you want someone who mixes creativity with engineering — let&apos;s
          talk.
        </p>

        <button className="mt-5 px-12 py-4 rounded-2xl font-bold text-xl bg-gradient-to-r from-pink-600 to-red-600 hover:from-red-600 hover:to-pink-600 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,0,120,0.4)] animate-glow">
          Let&apos;s Build Something Great Together 🚀
        </button>
      </section>
    </div>
  );
};

export default About;
