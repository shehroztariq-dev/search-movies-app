// components/search.tsx

import { SearchIcon, XIcon } from "lucide-react";
import { useRef, useEffect } from "react";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder?: string;
  className?: string;
  onSearch?: (term: string) => void;
  autoFocus?: boolean;
}

const Search = ({
  searchTerm,
  setSearchTerm,
  placeholder = "Search through thousands of books",
  className = "",
  onSearch,
  autoFocus = false,
}: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setSearchTerm("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(searchTerm);
    }
    if (e.key === "Escape") {
      handleClear();
    }
  };

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div
      className={`px-4 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 focus-within:bg-white focus-within:ring-2 transition-all duration-200 max-w-full ${className}`}
      role="search">
      <div className="flex items-center gap-3 min-w-0">
        <SearchIcon
          className="text-gray-500 shrink-0"
          size={20}
          aria-hidden="true"
        />

        <input
          ref={inputRef}
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 min-w-0 w-full text-base"
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Search movies"
          aria-describedby="search-instructions"
          spellCheck={false}
        />

        {searchTerm && (
          <button
            onClick={handleClear}
            className="shrink-0 p-1 hover:bg-gray-300 rounded-full transition-colors focus:outline-none focus:ring-2 "
            aria-label="Clear search"
            type="button">
            <XIcon className="text-gray-600" size={18} />
          </button>
        )}
      </div>

      {/* Hidden helper text for screen readers */}
      <span id="search-instructions" className="sr-only">
        Press Enter to search, Escape to clear
      </span>
    </div>
  );
};

export default Search;
