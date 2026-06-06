import logo from "../assets/images/logo-srabi.png";
import { NavLink } from "react-router-dom";

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
          />
      </div>
      <h4>Srabi Solo</h4>

      <hr />

      <ul className="nav flex-column">

        <li className="nav-item">
          <NavLink
          to="/"  className={({ isActive }) =>
    isActive
      ? "sidebar-link active"
      : "sidebar-link"
  }>
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink 
            to="/produk "  className={({ isActive }) =>
    isActive
      ? "sidebar-link active"
      : "sidebar-link"
  }>
              Produk
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink 
          to="/transaksi"  className={({ isActive }) =>
    isActive
      ? "sidebar-link active"
      : "sidebar-link"
  }>
            Transaksi
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
          to="/laporan"  className={({ isActive }) =>
    isActive
      ? "sidebar-link active"
      : "sidebar-link"
  }>
            Laporan
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;