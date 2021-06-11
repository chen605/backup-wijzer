import React from 'react';
import UserRegistration from '../components/UserRegistration';
import useFetch from '../custom-hooks/useFetch';

const Homepage = () => {
  const CRM = useFetch('/questions?domain=data');
  console.log(CRM);
  return (
    <div>
      <UserRegistration />
    </div>
  );
};

export default Homepage;
