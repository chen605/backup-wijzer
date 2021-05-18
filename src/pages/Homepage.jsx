import React from 'react';
import useFetch from '../custom-hooks/useFetch';

const Homepage = () => {
  const CRM = useFetch('/questions?domain=crm');
  console.log(CRM);
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
};

export default Homepage;
