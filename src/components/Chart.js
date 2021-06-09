import React, { useState, useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

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
  const { uid } = useSelector(selectUser);
  const [config, setConfig] = useState({});

  const data2 = axios.get('http://localhost:8080/userprogress', {
    headers: {
      'Content-Type': 'application/json',
      userFirebaseId: '5',
    },
  });
  console.log(data2);

  function getChartData() {
    axios
      .get('http://www.json-generator.com/api/json/get/coXIyroYAy?indent=2')
      .then((res) => {
        const coin = res.data;
        let labels = [];
        let data = [];
        let reducedData = [];
        coin.forEach((element) => {
          labels.push(element.labels);
          data.push(element.data);
        });

        function reduceDataPlease() {
          for (let i = 0; i < data[0].length; i++) {
            let reducer = data[0][i];
            let makeSmall = reducer / 1000;
            if (makeSmall > 100) {
              makeSmall = 34;
            } else if (makeSmall < 6) {
              makeSmall = 20;
            }

            reducedData.push(makeSmall);
          }
          return reducedData;
        }
        reduceDataPlease();
        // console.log('New array is: ' + reducedData);

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
              data: reducedData, //hardcoded it should be replaced with the data variable
              backgroundColor: [
                '#040FD9',
                '#020873',
                '#0554F2',
                '#0597F2',
                '#05AFF2',
              ],
            },
          ],
        });
      });
  }

  useEffect(() => {
    getChartData();
  }, []);

  // console.log(config);

  return (
    <>
      <div>
        {/* TODO get request for this chart */}
        <PolarArea data={config} options={options} />
      </div>
    </>
  );
};

export default Chart;
