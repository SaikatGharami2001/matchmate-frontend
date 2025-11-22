const particles = [
  {
    icon: "❤️",
    size: "text-5xl",
    opacity: "text-pink-500/30",
    left: "10%",
    top: "15%",
    anim: "animate-float",
  },
  {
    icon: "💘",
    size: "text-6xl",
    opacity: "text-pink-500/25",
    left: "35%",
    top: "30%",
    anim: "animate-float-delayed",
  },
  {
    icon: "💖",
    size: "text-7xl",
    opacity: "text-pink-500/20",
    left: "70%",
    top: "65%",
    anim: "animate-float",
  },
  {
    icon: "💝",
    size: "text-5xl",
    opacity: "text-pink-500/25",
    left: "80%",
    top: "25%",
    anim: "animate-float-slow",
  },
  {
    icon: "💕",
    size: "text-6xl",
    opacity: "text-pink-500/15",
    left: "15%",
    top: "70%",
    anim: "animate-float-slow",
  },
];

const BackgroundParticles = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`${p.anim} absolute ${p.size} ${p.opacity} blur-[1px]`}
          style={{ left: p.left, top: p.top }}
        >
          {p.icon}
        </div>
      ))}
    </div>
  );
};

export default BackgroundParticles;
