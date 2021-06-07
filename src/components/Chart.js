import React from "react";
import { PolarArea } from "react-chartjs-2";

const data = {
  labels: [
    "Data, dashboards & business intelligence",
    "CRM en klantreis",
    "Digitale producten, service & marketing",
    "Cloud, kantoorautomatisering & veiligheid",
    "Artificial intelligence & andere opkomende technologieën",
  ],
  datasets: [
    {
      label: "Results",
      data: [1, 5, 4, 2, 4],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "#736559",
        "#000636",
      ],
    },
  ],
};

const options = {
  type: "polar",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Polar Area Chart",
      },
    },
  },
};

const Chart = () => (
  <>
    <div className="results-page__chart">
      <PolarArea data={data} options={options} />
    </div>
  </>
);

export default Chart;
