interface Movie {
  id: number;
  title: string;
  poster_url: string | null;
  count: number;
}

interface TrendingMoviesProps {
  topMovies: Movie[];
}

export default function TrendingMovies({ topMovies }: TrendingMoviesProps) {
  if (topMovies.length === 0) {
    return null;
  }

  return (
    <div className="pt-8 container">
      <h2 className="text-2xl font-bold mb-6">Trending</h2>
      <ul className="grid grid-cols-5 gap-6">
        {topMovies.map((movie, index) => (
          <li key={movie.id} className="group relative flex flex-col">
            <span className="absolute -left-2 -top-2 z-10 text-5xl font-bold text-gray-900/10 select-none">
              {index + 1}
            </span>
            <div className="overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:shadow-lg ">
              <img
                src={movie.poster_url ?? "/no-poster.png"}
                alt={movie.title}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-800 truncate">
              {movie.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
