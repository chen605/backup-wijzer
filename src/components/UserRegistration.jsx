import React, { useState } from 'react';
// import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CustomButton from './custom-component/CustomButton';
import Banner from './Banner/Banner';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import moment from 'moment';

const UserRegistration = () => {
  const { uid } = useSelector(selectUser);
  const date = moment().format('YYYY-MM-DD');
  const history = useHistory();

  const [userCredentials, setUserCredentials] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    signUpDate: date,
    gender: '',
  });

  const { firstName, lastName, birthDate, gender } = userCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // firebase
    //   .auth()
    //   .currentUser.getIdToken(/* forceRefresh */ true)
    //   .then(function (idToken) {
    //     console.log(typeof idToken);
    //   })
    //   .catch(function (error) {
    //     alert(error.message);
    //   });

    const user = JSON.stringify(userCredentials);
    const domainName = process.env.REACT_APP_DOMAIN_NAME;
    try {
      await axios.post(`${domainName}/user/signup`, user, {
        headers: {
          'Content-Type': 'application/json',
          userFirebaseId: uid,
        },
      });
      alert('Registratie succesvol!');
      history.push('/company-registration');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="user-registration">
      <Banner />
      <form onSubmit={handleSubmit}>
        <div className="user-registration__input">
          <label className="user-registration__input__title">Voornaam</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <div className="user-registration__input">
          <label className="user-registration__input__title">Achternaam</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Your answer"
          />
        </div>

        <div className="user-registration__input">
          <label className="user-registration__input__title">Gender</label>
          <label className="user-registration__input__checkbox">
            <input
              name="gender"
              type="radio"
              value="Man"
              checked={gender === 'Man'}
              onChange={handleChange}
            />
            &nbsp;Man
          </label>

          <label className="user-registration__input__checkbox">
            <input
              name="gender"
              type="radio"
              value="Vrouw"
              checked={gender === 'Vrouw'}
              onChange={handleChange}
            />
            &nbsp;Vrouw
          </label>

          <label className="user-registration__input__checkbox">
            <input
              name="gender"
              type="radio"
              value="Zeg ik liever niet"
              checked={gender === 'Zeg ik liever niet'}
              onChange={handleChange}
            />
            &nbsp;Zeg ik liever niet
          </label>

          <label className="user-registration__input__checkbox">
            <input
              name="gender"
              type="radio"
              value="Other"
              checked={gender === 'Other'}
              onChange={handleChange}
            />
            &nbsp;Other
            {/* <input type="text" /> */}
          </label>
        </div>

        <div className="user-registration__input">
          <label className="user-registration__input__title">
            Geboortedatum
          </label>
          <input
            type="date"
            name="birthDate"
            value={birthDate}
            placeholder="dd/mm/yyyy"
            onChange={handleChange}
          />
        </div>

        <CustomButton type="submit" name="Submit" />
      </form>
    </div>
  );
};

export default UserRegistration;
