// components/AllMovies.tsx

import MovieCard from "./movie-card";

const AllMovies = ({ errorMessage, isLoading, moviesList }: AllMoviesProps) => {
  if (isLoading) {
    return (
      <section className="px-6 py-8 container">
        <h2 className="text-2xl font-bold mb-6">All Movies</h2>
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
          <p className="mt-4 text-gray-500">Loading movies...</p>
        </div>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className="px-6 py-8 container">
        <h2 className="text-2xl font-bold mb-6">All Movies</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-600">{errorMessage}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-8 container">
      <h2 className="text-2xl font-bold mb-6">Popular</h2>
      {moviesList.length === 0 ? (
        <p className="text-gray-500">No movies available</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {moviesList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AllMovies;
