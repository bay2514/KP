import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Produk from "./pages/Produk";
import Transaksi from "./pages/Transaksi";
import Laporan from "./pages/Laporan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/laporan" element={<Laporan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;