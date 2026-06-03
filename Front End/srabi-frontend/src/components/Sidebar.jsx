function Sidebar() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#6F4E37"
      }}
    >
      <h4>Srabi Solo</h4>

      <hr />

      <ul className="nav flex-column">

        <li className="nav-item">
          <a href="#" className="sidebar-link">
            Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="sidebar-link">
            Produk
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="sidebar-link">
            Transaksi
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="sidebar-link">
            Laporan
          </a>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;