import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Produk from "./pages/Produk";
import Transaksi from "./pages/Transaksi";
import Laporan from "./pages/Laporan";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex"> 
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/transaksi" element={<Transaksi />} />
            <Route path="/laporan" element={<Laporan />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;