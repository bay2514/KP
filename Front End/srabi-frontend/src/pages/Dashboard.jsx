import MainLayout from "../layouts/MainLayout";

function Dashboard() {
  return (
    <MainLayout>

      <h2 className="page-title mb-4">
        Dashboard
      </h2>

      <div className="row g-4">

        <div className="col-md-3">
        <div className="card stat-card card-produk shadow">
          <div className="card-body">
            <div className="dashboard-title">
              Total Produk
            </div>
            <div className="dashboard-number">
            25
            </div>
          </div>
        </div>
        </div>


        <div className="col-md-3">
        <div className="card stat-card card-transaksi shadow">
          <div className="card-body">
            <div className="dashboard-title">
              Total Transaksi
            </div>
            <div className="dashboard-number">
            25
            </div>
          </div>
        </div>
        </div>

        <div className="col-md-3">
        <div className="card stat-card card-penjualan shadow">
          <div className="card-body">
            <div className="dashboard-title">
              Total Penjualan
            </div>
            <div className="dashboard-number">
            25
            </div>
          </div>
        </div>
        </div>

        <div className="col-md-3">
        <div className="card stat-card card-stok shadow">
          <div className="card-body">
            <div className="dashboard-title">
              Stok Menipis
            </div>
            <div className="dashboard-number">
            25
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="row mt-4">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header">
              Grafik Penjualan
            </div>

            <div className="card-body">

              <div
                style={{
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                Chart Penjualan Bulanan
              </div>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow">

            <div className="card-header">
              Produk Terlaris
            </div>

            <div className="card-body">

              <ul className="list-group">

                <li className="list-group-item">
                  Srabi Original
                </li>

                <li className="list-group-item">
                  Srabi Coklat
                </li>

                <li className="list-group-item">
                  Srabi Keju
                </li>

                <li className="list-group-item">
                  Srabi Pisang
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

      <div className="card shadow mt-4">

        <div className="card-header">
          Transaksi Terbaru
        </div>

        <div className="card-body">

          <table className="table table-bordered">

            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Produk</th>
                <th>Jumlah</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>03/06/2026</td>
                <td>Srabi Original</td>
                <td>2</td>
                <td>Rp 10.000</td>
              </tr>

              <tr>
                <td>2</td>
                <td>03/06/2026</td>
                <td>Srabi Coklat</td>
                <td>3</td>
                <td>Rp 21.000</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;