// App.tsx
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import Header from "./components/header";
import AllMovies from "./components/all-movies";
import Hero from "./components/hero";
import { getTopMovies, updateSearchCount } from "./services/metrices";
import TrendingMovies from "./components/trending-movies";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  const [topMovies, setTopMovies] = useState([]);

  // Debounce the search term to prevent making too many API requests
  // by waiting for the user to stop typing for 500ms
  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query: string = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMoviesList([]);
        return;
      }

      setMoviesList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount({
          searchTerm: query.toLowerCase(),
          movie: data.results[0],
        });
      }
    } catch (error) {
      console.log(`"Error fetch movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTopMovies = async () => {
    try {
      const movies = await getTopMovies();
      setTopMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTopMovies();
  }, []);

  return (
    <main>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hero />
      <TrendingMovies topMovies={topMovies} />
      <AllMovies
        errorMessage={errorMessage}
        isLoading={isLoading}
        moviesList={moviesList}
      />
    </main>
  );
};

export default App;
