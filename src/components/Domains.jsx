import React from 'react';
import useFetch from '../custom-hooks/useFetch';
import DomainItem from './DomainItem';

const Domains = ({ domain }) => {
  const data = useFetch(`/questions?domain=${domain}`);
  console.log(data)

  let count
  let subfield = 1
  data.forEach(item => {
    if (item.type === 'header') {
      item.header = true;
      item.subfield = subfield;
      count = Number(item.answersList[0]);
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

  return (
    <section>
      <form>
        {newData.map((items) => (
          <DomainItem items={items} key={items[0].subfield}/>
        ))}
      </form>
    </section>
  );
};

export default Domains;