import React from 'react';
import { useHistory } from 'react-router';
import { auth } from '../../firebase/firebase';

const SignedInLinks = () => {
  const history = useHistory();
  const signOut = () => {
    auth.signOut();
    history.push('/');
  };

  return (
    <div className="signedInLinks">
      <div className="signedInLinks__button" onClick={signOut}>
        Log Out
      </div>
    </div>
  );
};

export default SignedInLinks;
