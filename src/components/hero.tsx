// components/Hero.tsx

import Search from "./search";

const Hero = ({ searchTerm, setSearchTerm }: HeroProps) => {
  return (
    <div className="h-96 pt-20 flex flex-col items-center justify-center bg-white px-4 container">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700">
          Find{" "}
          <span className="bg-linear-to-r from-cyan-700 to-cyan-600 bg-clip-text text-transparent">
            Movies
          </span>{" "}
          that You'll Enjoy
        </h1>

        <p className="text-gray-600 text-lg mt-2">
          Discover thousands of movies, TV shows, and more.
        </p>

        <div className="mt-8 w-full max-w-md mx-auto">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
