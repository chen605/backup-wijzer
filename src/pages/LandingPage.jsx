import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignupState, signupstate } from '../features/userSlice';

import backgroundImage from "../img/2329f-int0003.jpg";
import CustomButton from "../components/custom-component/CustomButton";

const LandingPage = () => {
  const history = useHistory();
  // const [signup, setSignup] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

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

  const signup = useSelector(selectSignupState);
  return (
    <div
      className="landingPage"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
          <h1>Sign Up</h1>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <CustomButton type="submit" onClick={register} name="Sign Up" />

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

export default LandingPage;
