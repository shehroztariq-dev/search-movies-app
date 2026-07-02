// App.tsx
import { useEffect, useState } from "react";
import Header from "./components/header";
import AllMovies from "./components/all-movies";
import Hero from "./components/hero";

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
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);

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
    } catch (error) {
      console.log(`"Error fetch movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBanner = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/trending/movie/day`,
        API_OPTIONS,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch trending movies");
      }

      const data = await response.json();
      const withBackdrop = (data.results || []).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (m: any) => m.backdrop_path,
      );

      if (withBackdrop.length > 0) {
        const random =
          withBackdrop[Math.floor(Math.random() * withBackdrop.length)];
        setBannerUrl(
          `https://image.tmdb.org/t/p/original${random.backdrop_path}`,
        );
      }
    } catch (error) {
      console.log(`Error fetching banner: ${error}`);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMovies(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBanner();
  }, []);

  return (
    <main>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hero bannerUrl={bannerUrl} />
      <AllMovies
        errorMessage={errorMessage}
        isLoading={isLoading}
        moviesList={moviesList}
      />
    </main>
  );
};

export default App;
