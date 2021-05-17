import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase/firebase';
import { login, logout, selectUser } from './features/userSlice';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      {!user ? (
        <LandingPage />
      ) : (
        <>
          {/* NAV */}
          <Switch>
            <Route exact path="/">
              {/* HOMEPAGE */}
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
};

export default App;
