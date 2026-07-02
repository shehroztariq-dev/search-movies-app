// components/movie-card.tsx

import { StarIcon } from "lucide-react";

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-4">
      <div className="bg-gray-200 h-auto w-full">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-lg h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-medium text-gray-800 truncate">{movie.title}</h3>
        <div className="flex items-center gap-1 text-sm">
          {movie.vote_average && (
            <div className="flex gap-2 items-center">
              <StarIcon size={20} className="text-yellow-500" />
              <p className="font-medium">{movie.vote_average.toFixed(1)}</p>
            </div>
          )}
          <p className="text-gray-400">•</p>
          <p>{movie.original_language}</p>
          <p className="text-gray-400">•</p>
          <p>{movie.release_date ? movie.release_date.split("-")[0] : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
