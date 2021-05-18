import React from 'react';
import useFetch from '../custom-hooks/useFetch';

const Homepage = () => {
  const data = useFetch();
  console.log(data);
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
};

export default Homepage;
