import logo from "../assets/images/logo-srabi.png";

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
      <div className="sidebar-img mb-2">
        <img
         src={logo}
          alt="Logo Srabi"
          width="100"
          height="100"
          className="me-3"
          />
      </div>
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