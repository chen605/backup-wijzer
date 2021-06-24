import React, { useState } from 'react';
import axios from 'axios';
import useFetch from '../custom-hooks/useFetch';
import DomainItem from './DomainItem';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useHistory } from 'react-router-dom';
import CustomButton from './custom-component/CustomButton';

const Domains = ({ domain }) => {
  const { uid } = useSelector(selectUser);
  const history = useHistory();

  const data = useFetch(`/questions?domain=${domain}`);

  const [answers, setAnswers] = useState({});

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = value.trim();
    if (type === 'checkbox') {
      setAnswers((state) => {
        let stateString;
        if (state[name] === '' || state[name] === undefined) {
          stateString = value;
        } else {
          stateString = state[name];
          if (!stateString.includes(value) && event.target.checked) {
            stateString += ',,' + value.trim();
          }
          if (stateString.includes(value) && !event.target.checked) {
            stateString = stateString.replace(value + ',,', '');
            stateString = stateString.replace(',,' + value, '');
          }
        }
        return { ...answers, [name]: stateString };
      });
    } else {
      setAnswers({ ...answers, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formInput = JSON.stringify(answers);
    const domainName = process.env.REACT_APP_DOMAIN_NAME;
    try {
      await axios.post(`${domainName}/answers?domain=${domain}`, formInput, {
        headers: {
          'Content-Type': 'application/json',
          userFirebaseId: uid,
        },
      });

      history.push(`/dashboard`);
    } catch (error) {
      alert(error.message);
    }
  };

  let count;
  let subfield = 1;
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    if (index === 0 && item.type === 'checkbox') {
      item.header = true;
      item.subfield = subfield;
      count = item.answersList.length;
      item.open = true;
    }
    if (item.type === 'header') {
      item.header = true;
      item.subfield = subfield;
      if (!(count > 0)) {
        count = Number(item.answersList[0]);
      }
    }
    if (!item.header && count > 0) {
      item.subfield = subfield;
      count--;
    }
    if (count === 0) {
      item.subfield = subfield++;
    }
  }

  let newData = [];
  for (let i = 1; i < subfield; i++) {
    newData[i - 1] = data.filter((item) => item.subfield === i);
  }

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)}>
        {newData.map((items) => (
          <DomainItem
            items={items}
            key={items[0].subfield}
            handleChange={handleChange}
          />
        ))}
        <CustomButton type="submit" value="Submit" name="Verder" />
      </form>
    </section>
  );
};

export default Domains;
