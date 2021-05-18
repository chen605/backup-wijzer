import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080${url}`);
      setTestData(response.data);
      return response;
    }
    fetchData();
  }, [url]);
  return testData;
};

export default useFetch;
