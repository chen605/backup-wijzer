import React, { useState, useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';
import axios from 'axios';

const data = {
  labels: [
    'Data, dashboards & business intelligence',
    'CRM en klantreis',
    'Digitale producten, service & marketing',
    'Cloud, kantoorautomatisering & veiligheid',
    'Artificial intelligence & andere opkomende technologieën',
  ],
  datasets: [
    {
      label: 'Results',
      data: [1, 5, 4, 2, 4],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        '#736559',
        '#000636',
      ],
    },
  ],
};

const options = {
  type: 'polar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Polar Area Chart',
      },
    },
  },
};

const Chart = () => {
  const [config, setConfig] = useState({});

  function getChartData() {
    axios
      .get('http://www.json-generator.com/api/json/get/coXIyroYAy?indent=2')
      .then((res) => {
        const coin = res.data;
        let labels = [];
        let data = [];
        coin.forEach((element) => {
          // labels.push(element.labels);
          // data.push(element.data);
        });

        setConfig({
          labels: [
            'Data, dashboards & business intelligence',
            'CRM en klantreis',
            'Digitale producten, service & marketing',
            'Cloud, kantoorautomatisering & veiligheid',
            'Artificial intelligence & andere opkomende technologieën',
          ], //hardcoded it should be replaced with the labels variable

          datasets: [
            {
              label: 'Population',
              data: [1, 5, 4, 2, 4], //hardcoded it should be replaced with the data variable
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                '#736559',
                '#000636',
              ],
            },
          ],
        });
      });
  }

  useEffect(() => {
    getChartData();
  }, []);

  console.log(config);

  return (
    <>
      <div className="results-page__chart">
        <PolarArea data={data} options={options} />

        {/* TODO get request for this chart */}
        <PolarArea data={config} options={options} />
      </div>
    </>
  );
};

export default Chart;
