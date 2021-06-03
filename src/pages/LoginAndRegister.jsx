import React, { useRef, useState } from 'react';
import backgroundImage from '../img/2329f-int0003.jpg';
import { useHistory } from 'react-router';
import { auth } from '../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignupState, signupstate } from '../features/userSlice';
import CustomButton from '../components/custom-component/CustomButton';
import axios from 'axios';

const LoginAndRegister = () => {
  const history = useHistory();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const [companyCredentials, setCompanyCredentials] = useState({
    name: '',
    kvkNumber: '',
  });

  const { name, kvkNumber } = companyCredentials;

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        const company = JSON.stringify(companyCredentials);
        try {
          axios.post('http://localhost:8080/user/company/signup', company, {
            headers: {
              'Content-Type': 'application/json',
              userFirebaseId: authUser.uid,
            },
          });
          alert('Registratie succesvol!');
        } catch (error) {
          alert(error.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompanyCredentials({ ...companyCredentials, [name]: value });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        history.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signup = useSelector(selectSignupState);
  return (
    <div
      className="landingPage"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {signup ? (
        <form className="signUpForm">
          <h1>Log In</h1>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <CustomButton type="submit" onClick={signIn} name="Log In" />

          <h4>
            <span className="signupScreen__gray">Don't have an account? </span>
            <span
              className="signupScreen__link"
              onClick={() => dispatch(signupstate(!signup))}
            >
              Register now.
            </span>
          </h4>
        </form>
      ) : (
        <form className="signInForm">
          <h1>Registreren</h1>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Bedrijfsnaam"
          />
          <input
            type="text"
            name="kvkNumber"
            value={kvkNumber}
            onChange={handleChange}
            placeholder="KVK nummer"
          />
          <CustomButton type="submit" onClick={register} name="Registreer" />

          <h4>
            <span className="signupScreen__gray">
              Already have an account?{' '}
            </span>
            <span
              className="signupScreen__link"
              onClick={() => dispatch(signupstate(!signup))}
            >
              Login to an existing account.
            </span>
          </h4>
        </form>
      )}
    </div>
  );
};

export default LoginAndRegister;
