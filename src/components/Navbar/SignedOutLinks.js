import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSignupState, signupstate } from "../../features/userSlice";

const SignedOutLinks = () => {
  const dispatch = useDispatch();
  const signup = useSelector(selectSignupState);
  return (
    <div className="signedOutLinks">
      {!signup ? (
        <div className="signedOutLinks__button" onClick={() => dispatch(signupstate(!signup))}>
          Sign In
        </div>
      ) : (
        <div className="signedOutLinks__button" onClick={() => dispatch(signupstate(!signup))}>
          Sign Up
        </div>
      )}
    </div>
  );
};

export default SignedOutLinks;
