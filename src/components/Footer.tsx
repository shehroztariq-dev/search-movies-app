const Footer = () => {
  return (
    <footer className=" bg-gray-50">
      {/* Bottom bar */}
      <div className="my-4 pt-4 border-t border-cyan-900/50 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BookStore. All rights reserved. Developed
        by <span className="font-bold text-cyan-900/50">Shehroz Tariq</span>
      </div>
    </footer>
  );
};

export default Footer;
