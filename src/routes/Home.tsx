import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import AllBooks from "../components/AllBooks";
import { fetchAllBooks } from "../services/books";

const PAGE_SIZE = 20;

const Home = () => {
  const [books, setBooks] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const startIndex = page * PAGE_SIZE;
        const { items, totalItems } = await fetchAllBooks(
          startIndex,
          PAGE_SIZE,
        );
        setBooks(items);
        setTotalItems(totalItems);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load books");
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, [page]);

  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  return (
    <>
      <Hero />
      <AllBooks isLoading={loading} errorMessage={error} books={books} />

      {!loading && !error && totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 py-6">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-4 py-2 rounded-md border  disabled:opacity-40 disabled:cursor-not-allowed">
            Previous
          </button>

          <span className="text-sm text-gray-600">
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page + 1 >= totalPages}
            className="px-4 py-2 rounded-md border disabled:opacity-40 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
