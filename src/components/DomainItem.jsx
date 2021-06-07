import React from 'react';
import FormQuestion from './FormQuestion';

const DomainItem = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <FormQuestion question={item} key={item.id} />
      ))}
    </div>
  );
};

export default DomainItem;
