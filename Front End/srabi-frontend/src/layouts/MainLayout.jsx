import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
   <div className="p-4">
          {children}
        </div>
  );
}

export default MainLayout;