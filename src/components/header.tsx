// components/header.tsx

import Search from "./search";

const Header = ({ searchTerm, setSearchTerm }: HeaderProps) => {
  return (
    <header className="flex items-center justify-around w-full  py-2 bg-white shadow-md fixed top-0 z-50">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="CineSeek Logo"
          className="h-12 w-12 object-contain"
        />
        <h1 className="font-bold text-gray-800 text-3xl tracking-tight">
          CineSeek
        </h1>
      </div>
      <div className="flex-1 max-w-md ">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </header>
  );
};

export default Header;
