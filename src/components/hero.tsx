// components/hero.tsx

const Hero = ({ bannerUrl }: HeroProps) => {
  return (
    <div className="container mx-auto px-4 mt-20 md:mt-24">
      <div className="relative flex h-64 sm:h-80 md:h-96 flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
        {/* Background banner */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: bannerUrl ? `url(${bannerUrl})` : undefined,
            opacity: bannerUrl ? 1 : 0,
          }}
        />
        {/* Fallback gradient while loading / if fetch fails */}
        <div
          className={`absolute inset-0 bg-linear-to-b from-cyan-50/60 via-white to-white transition-opacity duration-700 ${
            bannerUrl ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Dark overlay for text readability over the photo */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center max-w-2xl px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            Find{" "}
            <span className="bg-linear-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
              Movies
            </span>{" "}
            that You'll Enjoy
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg mt-2 md:mt-3">
            Discover thousands of movies, TV shows, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
