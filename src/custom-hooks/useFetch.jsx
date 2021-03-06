import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [testData, setTestData] = useState([]);
  const domainName = process.env.REACT_APP_DOMAIN_NAME;
  
  useEffect(() => {
    
    async function fetchData() {
      
      const response = await axios.get(`${domainName}${url}`);
      setTestData(response.data);
      return response;
    }
    fetchData();
  }, [url]);
  return testData;
};

export default useFetch;
      
