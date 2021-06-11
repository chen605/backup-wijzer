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
  const domainName = process.env.REACT_APP_DOMAIN_NAME;

  function getChartData() {
    axios
      .get(`${domainName}/userprogress`, {
        headers: {
          'Content-Type': 'application/json',
          userFirebaseId: uid,
        },
      })
      .then((res) => {
        const data = res.data;
        const resultsArray = [];

        let dataRating = data.dataRating;
        let crmRating = data.crmRating;
        let digitalProductsRating = data.digitalProductsRating;
        let securityRating = data.securityRating;
        let aiRating = data.aiRating;

        resultsArray.push(
          dataRating,
          crmRating,
          digitalProductsRating,
          securityRating,
          aiRating
        );
        console.log(resultsArray);

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
              data: resultsArray, //hardcoded it should be replaced with the data variable
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
