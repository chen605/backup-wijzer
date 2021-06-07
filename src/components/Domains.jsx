import React from 'react';
import useFetch from '../custom-hooks/useFetch';
import DomainItem from './DomainItem';

const Domains = ({ domain }) => {
  const data = useFetch(`/questions?domain=${domain}`);

  let count;
  let subfield = 1;
  data.forEach((item) => {
    if (item.answersList[0] === ' ') {
      item.header = true;
      item.subfield = subfield;
      count = 5;
    }
    if (!item.header && count > 0) {
      item.subfield = subfield;
      count--;
    }
    if (count === 0) {
      item.subfield = subfield++;
    }
  });

  let newData = [];
  for (let i = 1; i < subfield; i++) {
    newData[i - 1] = data.filter((item) => item.subfield === i);
  }
  console.log(newData);

  return (
    <section>
      <form>
        {newData.map((items, index) => (
          <DomainItem items={items} key={index} />
        ))}
      </form>
    </section>
  );
};

export default Domains;
