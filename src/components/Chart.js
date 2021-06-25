import React, { useState, useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const options = {
  animation: {
    animateRotate: true,
    animateScale: true,
  },
  scales: {
    r: {
      max: 5,
      min: 0,
      ticks: {
        stepSize: 1,
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
        let strategyRating = data.strategyRating;
        let skillsRating = data.skillsRating;

        resultsArray.push(
          dataRating,
          crmRating,
          digitalProductsRating,
          securityRating,
          aiRating,
          strategyRating,
          skillsRating
        );

        setConfig({
          type: 'polararea',
          labels: [
            'Data, Dashboards & Business Intelligence',
            'CRM & Klantreis',
            'Digitale producten, Service & Marketing',
            'Cloud, Kantoorautomatisering & Veiligheid',
            'AI & andere opkomende technologieën',
            'Digital Strategy',
            'Digital Skills',
          ], //hardcoded it should be replaced with the labels variable

          datasets: [
            {
              label: 'results',
              data: resultsArray, //hardcoded it should be replaced with the data variable
              backgroundColor: [
                '#ed5d4c',
                '#ed5c4cd2',
                '#ed5c4c93',
                '#ed5c4c65',
                '#ed5c4c3a',
                '#ed5d4c',
                '#ed5c4cd2',
              ],
            },
          ],
        });
      });
  }

  useEffect(() => {
    getChartData();
  }, []);

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
