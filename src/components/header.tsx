// components/header.tsx

const Header = () => {
  return (
    <header className="w-full px-6 py-2 bg-white shadow-sm fixed ">
      <div className="flex items-center gap-2 max-w-7xl mx-auto">
        <img src="/logo.png" alt="Logo" className="h-14 w-14" />
        <span>
          <h1 className="font-bold text-gray-700 font-stretch-extra-expanded text-4xl">
            CineSeek
          </h1>
        </span>
      </div>
    </header>
  );
};

export default Header;
