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

        resultsArray.push(
          dataRating,
          crmRating,
          digitalProductsRating,
          securityRating,
          aiRating
        );
        

        setConfig({
          type: "polararea",
          labels: [
            "Data, dashboards & business intelligence",
            "CRM & klantreis",
            "Digitale producten, service & marketing",
            "Cloud, kantoorautomatisering & veiligheid",
            "AI & andere opkomende technologieën",
          ], //hardcoded it should be replaced with the labels variable

          datasets: [
            {
              label: "results",
              data: resultsArray, //hardcoded it should be replaced with the data variable
              backgroundColor: [
                "#040FD9",
                "#020873",
                "#0554F2",
                "#0597F2",
                "#05AFF2",
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
