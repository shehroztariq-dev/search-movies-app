// components/movie-card.tsx

import { StarIcon } from "lucide-react";

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-2/3 w-full bg-gray-200">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No image
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-medium text-gray-800 truncate">{movie.title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
          {movie.vote_average ? (
            <span className="flex items-center gap-1 text-gray-800 font-medium">
              <StarIcon size={12} className="fill-yellow-500 text-yellow-500" />
              {movie.vote_average.toFixed(1)}
            </span>
          ) : (
            <p>N/A</p>
          )}
          <span className="uppercase">{movie.original_language}</span>
          <span>
            {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
