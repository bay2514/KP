import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function SalesChart() {

  const data = {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember"
    ],
    datasets: [
      {
        label: "Penjualan",
        data: Array.from(
            {length:12},
        
        ()=> Math.floor(Math.random() * 500000) + 1000000
        ),
        borderColor: "#E67E22",
        backgroundColor: "#E67E22",
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default SalesChart;