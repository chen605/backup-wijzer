import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../firebase/firebase';

const LandingPage = () => {
  const history = useHistory();
  const [signup, setSignup] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
        history.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return <div>HELLO</div>;
};

export default LandingPage;
