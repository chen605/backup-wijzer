import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/test`);
      setTestData(response.data);
      return response;
    }
    fetchData();
  }, []);
  return testData;
};

export default useFetch;
