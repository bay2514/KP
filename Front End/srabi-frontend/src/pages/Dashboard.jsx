import SalesChart from "../components/SalesChart";

const statCards = [
  { label: "Total Produk", value: 25, color: "#6F4E37"},
  { label: "Total Transaksi", value: 25, color: "#8B6343" },
  { label: "Total Penjualan", value: "Rp 31.000", color: "#A0522D"},
  { label: "Stok Menipis", value: 25, color: "#C8813A"},
];

const produkTerlaris = [
  { nama: "Srabi Original", terjual: 245 },
  { nama: "Srabi Coklat", terjual: 198 },
  { nama: "Srabi Keju", terjual: 175 },
  { nama: "Srabi Pisang", terjual: 142 },
];

const transaksiTerbaru = [
  { no: 1, tanggal: "03/06/2026", produk: "Srabi Original", jumlah: 2, total: "Rp 10.000" },
  { no: 2, tanggal: "03/06/2026", produk: "Srabi Coklat", jumlah: 3, total: "Rp 21.000" },
];

function Dashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h2 style={{ color: "#6F4E37", fontWeight: 700 }}>Dashboard</h2>
        <p className="text-muted mb-0">Selamat datang di Sistem Informasi Penjualan UMKM Srabi Solo</p>
      </div>

      {/* Stat Cards */}
      <div className="row g-3 mb-4">
        {statCards.map((card, i) => (
          <div className="col-md-3 col-6" key={i}>
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "12px", backgroundColor: card.color }}>
              <div className="card-body text-white">
                <div style={{ fontSize: "1.8rem" }}>{card.icon}</div>
                <div style={{ fontSize: "0.8rem", opacity: 0.85, marginTop: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {card.label}
                </div>
                <div style={{ fontSize: "1.8rem", fontWeight: 700 }}>{card.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Terlaris */}
      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "12px" }}>
            <div className="card-header border-0 pt-3 pb-0" style={{ backgroundColor: "#6F4E37", borderRadius: "12px 12px 0 0" }}>
              <h6 className="text-white pb-2" style={{ justifySelf: "center", fontWeight: 600 }}>Grafik Penjualan</h6>
            </div>
            <div className="card-body">
              <SalesChart />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "12px" }}>
            <div className="card-header border-0 pt-3 pb-0" style={{ backgroundColor: "#6F4E37", borderRadius: "12px 12px 0 0" }}>
              <h6 className="text-white pb-2" style={{ justifySelf: "center", fontWeight: 600 }}>Produk Terlaris</h6>
            </div>
            <div className="card-body p-0">
              <table className="table table-hover mb-0">
                <thead style={{ backgroundColor: "#f8f5f0" }}>
                  <tr>
                    <th style={{ color: "#6F4E37", fontSize: "0.85rem" }}>Produk</th>
                    <th style={{ color: "#6F4E37", fontSize: "0.85rem", width: "30%" }}>Terjual</th>
                  </tr>
                </thead>
                <tbody>
                  {produkTerlaris.map((p, i) => (
                    <tr key={i}>
                      <td style={{ fontSize: "0.9rem" }}>{p.nama}</td>
                      <td style={{ color: "#C8813A", fontWeight: 600 }}>{p.terjual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Transaksi Terbaru */}
      <div className="card border-0 shadow-sm" style={{ borderRadius: "12px" }}>
        <div className="card-header border-0 pt-3 pb-0" style={{ backgroundColor: "#6F4E37", borderRadius: "12px 12px 0 0" }}>
          <h6 className= "text-white pb-2"style={{ justifySelf: "center", fontWeight: 600 }}>Transaksi Terbaru</h6>
        </div>
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead style={{ backgroundColor: "#f8f5f0" }}>
              <tr>
                {["No", "Tanggal", "Produk", "Jumlah", "Total"].map((h) => (
                  <th key={h} style={{ color: "#6F4E37", fontSize: "0.85rem" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transaksiTerbaru.map((t) => (
                <tr key={t.no}>
                  <td>{t.no}</td>
                  <td>{t.tanggal}</td>
                  <td>{t.produk}</td>
                  <td>{t.jumlah}</td>
                  <td style={{ color: "#6F4E37", fontWeight: 600 }}>{t.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;