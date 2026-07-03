declare interface HeaderProps {
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

declare interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    category?: string;
    poster_path?: string;
    release_date?: string;
    vote_average?: number;
    original_language?: string;
    release_date?: Date;
  };
}

declare interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}
declare interface UpdateSearchCountProps {
  searchTerm: string;
  movie: Movie;
}
