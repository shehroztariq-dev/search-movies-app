// components/header.tsx

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm fixed ">
      <div className="flex items-center gap-5 max-w-7xl mx-auto">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        <span>
          <h1 className="font-bold text-gray-700 font-stretch-extra-expanded text-4xl">
            FMDB
          </h1>
        </span>
      </div>
    </header>
  );
};

export default Header;
