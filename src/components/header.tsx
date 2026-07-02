// components/header.tsx

import Search from "./search";

const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-2.5 md:py-3">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          <div className="flex items-center gap-2 shrink-0">
            <img
              src="/logo.png"
              alt="CineSeek Logo"
              className="h-8 w-8 md:h-11 md:w-11 object-contain"
            />
            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 whitespace-nowrap">
              Cine
              <span className="bg-linear-to-r from-cyan-700 to-cyan-600 bg-clip-text text-transparent">
                Plex
              </span>
            </h1>
          </div>

          <div className="flex-1 max-w-full md:max-w-md">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
