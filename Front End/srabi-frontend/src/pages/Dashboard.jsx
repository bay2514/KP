import MainLayout from "../layouts/MainLayout";
import SalesChart from "../components/SalesChart";

function Dashboard() {
  return (
    <MainLayout>

      <div className="mb-4">
      <h2 className="page-tittle">
        Dashboard
      </h2>

      <p className="text-muted">
        Selamat datang di Sistem Informasi Penjualan UMKM Srabi Solo
      </p>
    </div>

      <div className="row g-">

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
          <div className="card shadow h-100">
            <div className="card-header">Grafik Penjualan</div>
            <div className="card-body">
              <SalesChart />
            </div>
          </div>
        </div>

        <div className="col-md-4">
        <div className="card shadow h-100 card-terlaris">

          <div className="card-header">
            Produk Terlaris
          </div>

          <div className="card-body p-0">

            <table className="table table-hover mb-0">

              <thead>
                <tr>
                  <th>Produk</th>
                  <th width="25%">Terjual</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Srabi Original</td>
                  <td>245</td>
                </tr>

                <tr>
                  <td>Srabi Coklat</td>
                  <td>198</td>
                </tr>

                <tr>
                  <td>Srabi Keju</td>
                  <td>175</td>
                </tr>

                <tr>
                  <td>Srabi Pisang</td>
                  <td>142</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>
      </div>
      </div>

      
      <div className="card shadow mt-4">
        <div className="card-header">Transaksi Terbaru</div>
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