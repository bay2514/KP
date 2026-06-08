import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Produk from "./pages/Produk";
import Transaksi from "./pages/Transaksi";
import Laporan from "./pages/Laporan";

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout user={user} onLogout={() => setUser(null)} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;