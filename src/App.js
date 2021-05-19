import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { auth } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import CompanyRegistration from './components/CompanyRegistration'


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
      <Navbar/>
      {!user ? (
        <LandingPage />
      ) : (
        <>
          <Switch>
            <Route exact path="/">
              <Homepage />

              <CompanyRegistration />
            </Route>
  
           </Switch>
         
        </>
      )}
    </Router>
  );
};

export default App;
