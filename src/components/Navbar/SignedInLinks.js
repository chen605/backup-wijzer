import React from "react";
import { auth } from "../../firebase/firebase";

const SignedInLinks = () => {
  return (
    <div className="signedInLinks">
      <div
        className="signedInLinks__button"
        onClick={() => auth.signOut()}
      >
        Log Out
      </div>
    </div>
  );
};

export default SignedInLinks;
