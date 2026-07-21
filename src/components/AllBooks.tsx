import BookCard from "./BookCard";

const AllBooks = ({ errorMessage, isLoading, books }: AllBooksProps) => {
  if (isLoading) {
    return (
      <section className=" py-8 container">
        <h2 className="text-2xl font-bold mb-6">All Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg aspect-[2/3] w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className=" py-8 container">
        <h2 className="text-2xl font-bold mb-6">All Books</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-600">{errorMessage}</p>
        </div>
      </section>
    );
  }

  return (
    <section className=" py-8 container">
      <h2 className="text-2xl font-bold mb-6">All Books</h2>
      {books.length === 0 ? (
        <p className="text-gray-500">No books available</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AllBooks;
