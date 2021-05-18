import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignupState, signupstate } from '../features/userSlice';

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
    <div>
      {signup ? (
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>

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
        <form>
          <h1>Sign Up</h1>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button type="submit" onClick={register}>
            Sign Up
          </button>

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
