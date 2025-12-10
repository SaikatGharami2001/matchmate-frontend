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
  const styles = {
    outer:
      "flex flex-col items-center text-center px-6 py-20 space-y-24 animate-fade-in",

    titleSection: "max-w-4xl space-y-6 animate-pop",

    title:
      "text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,0,120,0.35)]",

    intro:
      "text-gray-300 text-lg leading-relaxed animate-fade-in [animation-delay:200ms]",

    author: "font-semibold text-pink-500",

    missionSection:
      "max-w-4xl w-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-[0_0_50px_rgba(255,0,120,0.25)] space-y-6 animate-pop [animation-delay:250ms]",

    missionHeading:
      "text-3xl font-bold text-pink-400 drop-shadow-[0_0_25px_rgba(255,0,140,0.6)]",

    missionText: "text-gray-300 text-lg leading-relaxed",

    techSection: "max-w-4xl space-y-6 animate-fade-in [animation-delay:350ms]",

    techHeading: "text-3xl font-bold text-pink-400",

    techBadge:
      "px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-gray-200 text-sm font-semibold hover:border-pink-500 hover:text-pink-400 transition-all animate-pop",

    journeySection:
      "max-w-5xl w-full text-left space-y-10 animate-fade-in [animation-delay:450ms]",

    journeyHeading:
      "text-4xl font-bold text-pink-400 text-center drop-shadow-[0_0_18px_rgba(255,0,120,0.5)]",

    journeyIntro: "text-gray-300 text-center max-w-3xl mx-auto",

    timelineGrid: "mt-6 grid md:grid-cols-[0.35fr,1fr] gap-10",

    leftText:
      "hidden md:flex flex-col justify-center text-gray-300 text-lg leading-relaxed",

    timelineWrapper: "relative",

    timelineLine:
      "absolute left-4 top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-pink-500 via-red-500 to-transparent opacity-80",

    timelineItems: "space-y-10",

    timelineItem: "relative pl-12 animate-fade-in [animation-delay:300ms]",

    timelineDot:
      "absolute left-0 top-1.5 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_25px_rgba(255,0,120,0.8)] animate-heartbeat",

    year: "text-xs font-semibold tracking-widest text-gray-400",

    presentBadge:
      "px-2 py-0.5 text-[10px] rounded-full bg-pink-500/20 border border-pink-500/60 text-pink-300 uppercase tracking-wide",

    milestoneTitle: "text-lg font-semibold text-gray-100",

    milestoneText: "text-sm text-gray-300 leading-relaxed opacity-90",

    ctaSection:
      "max-w-4xl text-center space-y-6 animate-pop [animation-delay:600ms]",

    ctaHeading:
      "text-4xl font-extrabold text-pink-500 drop-shadow-[0_0_25px_rgba(255,0,120,0.7)]",

    ctaText: "text-gray-300 text-lg leading-relaxed",

    ctaSub: "text-gray-400 text-sm",

    ctaButton:
      "mt-5 px-12 py-4 rounded-2xl font-bold text-xl bg-gradient-to-r from-pink-600 to-red-600 hover:from-red-600 hover:to-pink-600 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,0,120,0.4)] animate-glow",
  };

  return (
    <div className={styles.outer}>
      {/* TITLE */}
      <section className={styles.titleSection}>
        <h1 className={styles.title}>About MatchMate ❤️</h1>

        <p className={styles.intro}>
          MatchMate is more than just a demo project — it’s a carefully crafted
          production-style application focused on clean architecture,
          performance and stunning UI. Built by{" "}
          <span className={styles.author}>Saikat Gharami</span>, who believes
          real engineering means creating experiences that feel alive and
          meaningful.
        </p>
      </section>

      {/* MISSION */}
      <section className={styles.missionSection}>
        <h2 className={styles.missionHeading}>Mission 🎯</h2>
        <p className={styles.missionText}>
          Dating apps shouldn’t feel like slot machines. MatchMate focuses on
          intentional and meaningful connections with premium interface design,
          smooth UX, and a strong emotional identity.
        </p>
      </section>

      {/* TECH STACK */}
      <section className={styles.techSection}>
        <h3 className={styles.techHeading}>Tech Behind MatchMate ⚙️</h3>

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
            <span key={tech} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className={styles.journeySection}>
        <h3 className={styles.journeyHeading}>Saikat&apos;s Journey 🐺</h3>

        <p className={styles.journeyIntro}>
          Years of discipline, improvement, consistency & vision. Every step
          built the version of myself creating MatchMate today.
        </p>

        <div className={styles.timelineGrid}>
          <div className={styles.leftText}>
            From beginner curiosity to dedicated creator — mastering frontend,
            backend, UI/UX, performance and real product thinking.
          </div>

          <div className={styles.timelineWrapper}>
            <div className={styles.timelineLine} />

            <div className={styles.timelineItems}>
              {milestones.map((item, index) => (
                <div key={item.year} className={styles.timelineItem}>
                  {/* Dot */}
                  <div className={styles.timelineDot} />

                  {/* Year & Present */}
                  <div className="inline-flex items-center gap-3 mb-1">
                    <span className={styles.year}>{item.year}</span>

                    {index === milestones.length - 1 && (
                      <span className={styles.presentBadge}>Present</span>
                    )}
                  </div>

                  <h4 className={styles.milestoneTitle}>{item.title}</h4>
                  <p className={styles.milestoneText}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Why Hire Saikat? 🔥</h2>

        <p className={styles.ctaText}>
          I build real products — not tutorial projects. I obsess over polish,
          detail, structure and user experience. MatchMate reflects my mindset
          of quality, discipline and execution.
        </p>

        <p className={styles.ctaSub}>
          If you want someone who mixes creativity with engineering — let&apos;s
          talk.
        </p>

        <button className={styles.ctaButton}>
          Let&apos;s Build Something Great Together 🚀
        </button>
      </section>
    </div>
  );
};

export default About;
