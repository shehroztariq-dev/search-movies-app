// App.tsx
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import Header from "./components/header";
import AllBooks from "./components/all-books";
import Hero from "./components/hero";

const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [booksList, setBooksList] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");

  // Debounce the search term to prevent making too many API requests
  // by waiting for the user to stop typing for 500ms
  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchBooks = async (query: string = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const params = new URLSearchParams({
        q: query || "subject:fiction",
        maxResults: "20",
        ...(API_KEY && { key: API_KEY }),
      });

      const endpoint = `${API_BASE_URL}?${params.toString()}`;

      const response = await fetch(endpoint);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.log("Google Books error detail:", errorData);
        throw new Error("Failed to fetch books");
      }

      const data = await response.json();

      if (data.error) {
        setErrorMessage(data.error.message || "Failed to fetch books");
        setBooksList([]);
        return;
      }

      setBooksList(data.items || []);
    } catch (error) {
      console.log(`Error fetching books: ${error}`);
      setErrorMessage("Error fetching books. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBooks(debounceSearchTerm);
  }, [debounceSearchTerm]);

  return (
    <main>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hero />
      <AllBooks
        errorMessage={errorMessage}
        isLoading={isLoading}
        booksList={booksList}
      />
    </main>
  );
};

export default App;
