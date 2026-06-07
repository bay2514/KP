import { useState } from "react";

const produkData = [
  { id_produk: 1, nama_produk: "Srabi Original", harga: 5000, stok: 120 },
  { id_produk: 2, nama_produk: "Srabi Coklat", harga: 7000, stok: 85 },
  { id_produk: 3, nama_produk: "Srabi Keju", harga: 8000, stok: 60 },
  { id_produk: 4, nama_produk: "Srabi Pisang", harga: 7000, stok: 15 },
  { id_produk: 5, nama_produk: "Srabi Pandan", harga: 6000, stok: 45 },
];

const initialTransaksi = [
  { id_transaksi: 1, tanggal: "2026-06-03", total_harga: 10000, detail: [{ id_produk: 1, nama_produk: "Srabi Original", harga: 5000, jumlah: 2, subtotal: 10000 }] },
  { id_transaksi: 2, tanggal: "2026-06-03", total_harga: 21000, detail: [{ id_produk: 2, nama_produk: "Srabi Coklat", harga: 7000, jumlah: 3, subtotal: 21000 }] },
];

function QtyInput({ value, onChange, min = 1, max = 9999 }) {
  const step = (delta) => onChange(Math.min(max, Math.max(min, (parseInt(value) || 0) + delta)));
  const handleChange = (e) => {
    const val = e.target.value;
    if (val === "") { onChange(""); return; }
    const num = parseInt(val);
    if (!isNaN(num)) onChange(Math.min(max, Math.max(min, num)));
  };
  const handleBlur = (e) => {
    if (e.target.value === "" || isNaN(parseInt(e.target.value))) onChange(min);
  };
  return (
    <div className="qty-wrap">
      <button type="button" className="qty-btn" onClick={() => step(-1)}>−</button>
      <input type="number" className="qty-input" value={value} onChange={handleChange} onBlur={handleBlur} min={min} max={max} />
      <button type="button" className="qty-btn" onClick={() => step(1)}>+</button>
    </div>
  );
}

function Transaksi() {
  const [transaksiList, setTransaksiList] = useState(initialTransaksi);
  const [showModal, setShowModal] = useState(false);
  const [showDetail, setShowDetail] = useState(null);
  const [tanggal, setTanggal] = useState(new Date().toISOString().split("T")[0]);
  const [cart, setCart] = useState([]);
  const [selectedProduk, setSelectedProduk] = useState("");
  const [jumlah, setJumlah] = useState(1);
  const [search, setSearch] = useState("");

  const formatRp = (n) => "Rp " + Number(n).toLocaleString("id-ID");
  const totalCart = cart.reduce((sum, item) => sum + item.subtotal, 0);

  const filtered = transaksiList.filter((t) =>
    t.tanggal.includes(search) ||
    t.detail.some((d) => d.nama_produk.toLowerCase().includes(search.toLowerCase()))
  );

  const handleTambahCart = () => {
    const qty = parseInt(jumlah) || 0;
    if (!selectedProduk || qty < 1) return;
    const produk = produkData.find((p) => p.id_produk === Number(selectedProduk));
    if (!produk) return;
    const existing = cart.find((c) => c.id_produk === produk.id_produk);
    setCart(existing
      ? cart.map((c) => c.id_produk === produk.id_produk
          ? { ...c, jumlah: c.jumlah + qty, subtotal: (c.jumlah + qty) * produk.harga }
          : c)
      : [...cart, { id_produk: produk.id_produk, nama_produk: produk.nama_produk, harga: produk.harga, jumlah: qty, subtotal: produk.harga * qty }]
    );
    setSelectedProduk(""); setJumlah(1);
  };

  const handleEditCartQty = (id_produk, newQty) => {
    const qty = parseInt(newQty) || 0;
    if (qty < 1) { setCart(cart.filter((c) => c.id_produk !== id_produk)); return; }
    setCart(cart.map((c) => c.id_produk === id_produk ? { ...c, jumlah: qty, subtotal: qty * c.harga } : c));
  };

  const handleTutupModal = () => {
    setShowModal(false); setCart([]); setSelectedProduk("");
    setJumlah(1); setTanggal(new Date().toISOString().split("T")[0]);
  };

  const handleSimpan = () => {
    if (cart.length === 0 || !tanggal) return;
    const newId = Math.max(...transaksiList.map((t) => t.id_transaksi)) + 1;
    setTransaksiList([...transaksiList, { id_transaksi: newId, tanggal, total_harga: totalCart, detail: cart }]);
    handleTutupModal();
  };

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div>
          <h2>Transaksi Penjualan</h2>
          <p>Catat dan kelola transaksi penjualan</p>
        </div>
        <button className="btn btn-srabi" onClick={() => setShowModal(true)}>+ Transaksi Baru</button>
      </div>

      {/* Tabel */}
      <div className="panel-card card">
        <div className="card-body">
          <input type="text" className="form-control search-input" placeholder="Cari transaksi..."
            value={search} onChange={(e) => setSearch(e.target.value)} />
          <table className="table table-hover align-middle srabi-table">
            <thead>
              <tr><th>No</th><th>Tanggal</th><th>Produk</th><th>Total</th><th>Aksi</th></tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={5} className="text-center text-muted py-4">Belum ada transaksi</td></tr>
              ) : filtered.map((t, i) => (
                <tr key={t.id_transaksi}>
                  <td>{i + 1}</td>
                  <td>{new Date(t.tanggal).toLocaleDateString("id-ID")}</td>
                  <td>{t.detail.map((d) => `${d.nama_produk} (${d.jumlah})`).join(", ")}</td>
                  <td><strong style={{ color: "#6F4E37" }}>{formatRp(t.total_harga)}</strong></td>
                  <td><button className="btn btn-sm btn-srabi-secondary" onClick={() => setShowDetail(t)}>Detail</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Transaksi Baru */}
      {showModal && (
        <div className="modal show d-block modal-srabi" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Transaksi Baru</h5>
                <button className="btn-close btn-close-white" onClick={handleTutupModal} />
              </div>
              <div className="modal-body">

                {/* Tanggal */}
                <div className="mb-3">
                  <label className="form-label">Tanggal</label>
                  <input type="date" className="form-control" style={{ maxWidth: "200px" }}
                    value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
                </div>

                {/* Tambah Item */}
                <div className="cart-section">
                  <label className="form-label">Tambah Produk</label>
                  <div className="d-flex gap-2 align-items-center flex-wrap">
                    <select className="form-select" style={{ minWidth: "200px", flex: 1 }}
                      value={selectedProduk} onChange={(e) => setSelectedProduk(e.target.value)}>
                      <option value="">Pilih produk...</option>
                      {produkData.map((p) => (
                        <option key={p.id_produk} value={p.id_produk}>
                          {p.nama_produk} — Rp {p.harga.toLocaleString("id-ID")}
                        </option>
                      ))}
                    </select>
                    <QtyInput value={jumlah} onChange={setJumlah} min={1} max={9999} />
                    <button className="btn btn-srabi" style={{ whiteSpace: "nowrap", height: "42px" }}
                      onClick={handleTambahCart}>+ Tambah</button>
                  </div>
                </div>

                {/* Cart */}
                {cart.length > 0 && (
                  <table className="table align-middle srabi-table mb-0">
                    <thead>
                      <tr><th>Produk</th><th>Harga</th><th>Jumlah</th><th>Subtotal</th><th></th></tr>
                    </thead>
                    <tbody>
                      {cart.map((c) => (
                        <tr key={c.id_produk}>
                          <td><strong>{c.nama_produk}</strong></td>
                          <td>{formatRp(c.harga)}</td>
                          <td><QtyInput value={c.jumlah} onChange={(val) => handleEditCartQty(c.id_produk, val)} min={1} max={9999} /></td>
                          <td><strong style={{ color: "#6F4E37" }}>{formatRp(c.subtotal)}</strong></td>
                          <td><button className="btn btn-sm btn-danger" onClick={() => setCart(cart.filter((x) => x.id_produk !== c.id_produk))}>✕</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {/* Total */}
                <div className="cart-total">
                  <span className="text-muted me-2">Total Pembayaran:</span>
                  <strong style={{ fontSize: "1.2rem" }}>{formatRp(totalCart)}</strong>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleTutupModal}>Batal</button>
                <button className="btn btn-srabi" onClick={handleSimpan} disabled={cart.length === 0}>Simpan Transaksi</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detail */}
      {showDetail && (
        <div className="modal show d-block modal-srabi" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detail Transaksi #{showDetail.id_transaksi}</h5>
                <button className="btn-close btn-close-white" onClick={() => setShowDetail(null)} />
              </div>
              <div className="modal-body">
                <p className="mb-3">
                  <span className="text-muted">Tanggal: </span>
                  <strong style={{ color: "#6F4E37" }}>{new Date(showDetail.tanggal).toLocaleDateString("id-ID")}</strong>
                </p>
                <table className="table srabi-table">
                  <thead>
                    <tr><th>Produk</th><th>Harga</th><th>Jumlah</th><th>Subtotal</th></tr>
                  </thead>
                  <tbody>
                    {showDetail.detail.map((d, i) => (
                      <tr key={i}>
                        <td>{d.nama_produk}</td>
                        <td>{formatRp(d.harga)}</td>
                        <td>{d.jumlah}</td>
                        <td><strong style={{ color: "#6F4E37" }}>{formatRp(d.subtotal)}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="cart-total">
                  <span className="text-muted me-2">Total:</span>
                  <strong style={{ fontSize: "1.1rem" }}>{formatRp(showDetail.total_harga)}</strong>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowDetail(null)}>Tutup</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transaksi;