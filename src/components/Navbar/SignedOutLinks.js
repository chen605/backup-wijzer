import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signupstate } from '../../features/userSlice';

const SignedOutLinks = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const register = () => {
    dispatch(signupstate(false));
    history.push('/login');
  };

  const login = () => {
    dispatch(signupstate(true));
    history.push('/login');
  };

  return (
    <div className="signedOutLinks">
      <>
        <div className="signedOutLinks__button" onClick={login}>
          Log In
        </div>

        <div className="signedOutLinks__button" onClick={register}>
          Registreren
        </div>
      </>
    </div>
  );
};

export default SignedOutLinks;
