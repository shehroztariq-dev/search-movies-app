import Footer from "./Footer";
import Header from "./Haeder";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header searchTerm="" setSearchTerm={() => {}} />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
