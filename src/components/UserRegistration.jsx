import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [userCredentials, setUserCredentials] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
  });

  const { firstName, lastName, birthDate, gender } = userCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = JSON.stringify(userCredentials);
    try {
      await axios.post('http://localhost:8080/user/signup', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert.success('Registratie succesvol!');
      setUserCredentials({
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: '',
      });
    } catch (e) {
      alert.error('Iets ging verkeerd. ' + e.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Voornaam</label>
        <div>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <label>Achternaam</label>
        <div>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <label>Gender</label>
        <div>
          <label>
            <input
              name="gender"
              type="radio"
              value="Man"
              checked={gender === 'Man'}
              onChange={handleChange}
            />
            Man
          </label>
        </div>

        <div>
          <label>
            <input
              name="gender"
              type="radio"
              value="Vrouw"
              checked={gender === 'Vrouw'}
              onChange={handleChange}
            />
            Vrouw
          </label>
        </div>

        <div>
          <label>
            <input
              name="gender"
              type="radio"
              value="Zeg ik liever niet"
              checked={gender === 'Zeg ik liever niet'}
              onChange={handleChange}
            />
            Zeg ik liever niet
          </label>
        </div>

        <div>
          <label>
            <input
              name="gender"
              type="radio"
              value="Other"
              checked={gender === 'Other'}
              onChange={handleChange}
            />
            Other
            <input type="text" />
          </label>
        </div>

        <label>Geboortedatum</label>
        <div>
          <input
            type="date"
            name="birthDate"
            placeholder="dd/mm/yyyy"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserRegistration;
