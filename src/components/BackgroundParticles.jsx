const BackgroundParticles = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div className="animate-float absolute text-pink-500/30 text-4xl">❤️</div>
      <div className="animate-float-delayed absolute text-pink-500/25 text-5xl left-1/3 top-1/4">
        💘
      </div>
      <div className="animate-float absolute text-pink-500/20 text-6xl left-2/3 top-2/3">
        💖
      </div>
    </div>
  );
};

export default BackgroundParticles;
