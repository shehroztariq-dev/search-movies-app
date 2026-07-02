// components/search.tsx

import { SearchIcon, XIcon } from "lucide-react";

const Search = ({
  searchTerm,
  setSearchTerm,
  placeholder = "Search through thousands of movies",
  className = "",
}: SearchProps) => {
  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div
      className={`px-4 py-3 rounded-lg bg-gray-200 w-96 container ${className}`}>
      <div className="flex items-center gap-2 min-w-0">
        <SearchIcon className="text-gray-700 shrink-0" size={20} />
        <input
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 min-w-0 w-full"
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search movies"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="shrink-0  hover:bg-gray-300 rounded-full transition-colors"
            aria-label="Clear search">
            <XIcon className="text-gray-700" size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
