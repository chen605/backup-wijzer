import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import ResultsPage from "./pages/ResultsPage";
import CompanyRegistration from "./components/CompanyRegistration";
import DomainOne from "./pages/DomainOne";
import DomainTwo from "./pages/DomainTwo";
import DomainThree from "./pages/DomainThree";
import DomainFour from "./pages/DomainFour";
import DomainFive from "./pages/DomainFive";
import LoginAndRegister from "./pages/LoginAndRegister";

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
      <Navbar />
      {!user ? (
        <>
          {/* If there is no user logged in */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginAndRegister} />
          </Switch>
        </>
      ) : (
        <>
          <Switch>
            {/* user & company registration */}
            <Route exact path="/" component={Homepage} />
            <Route
              path="/company-registration"
              component={CompanyRegistration}
            />
            {/* results page */}
            <Route path="/dashboard" component={ResultsPage} />

            {/* Domains */}
            <Route path="/data" component={DomainOne} />
            <Route path="/crm" component={DomainTwo} />
            <Route path="/digitalproducts" component={DomainThree} />
            <Route path="/security" component={DomainFour} />
            <Route path="/ai" component={DomainFive} />
          </Switch>
        </>
      )}
    </Router>
  );
};

export default App;
