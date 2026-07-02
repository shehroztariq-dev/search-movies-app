declare interface HeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

declare interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder?: string;
  className?: string;
}

declare interface AllMoviesProps {
  errorMessage: string;
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  moviesList: any[];
}
