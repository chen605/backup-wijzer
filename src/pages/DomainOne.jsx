import React from 'react';
import * as Survey from 'survey-react';
import Domains from '../components/Domains';
import useFetch from '../custom-hooks/useFetch';

const DomainOne = () => {
  return (
    <div>
      <Domains domain="data" />
    </div>
  );
};

export default DomainOne;
