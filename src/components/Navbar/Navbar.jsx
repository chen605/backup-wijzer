import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
// import SignedInLinks from '../layout/SignedInLinks'
// import SignedOutLinks from '../layout/SignedOutLinks'


const Navbar = (props) => {
const [status, setStatus] = useState("top")

  useEffect(() => {
  document.addEventListener("scroll", (e) => {
          const scrolled = document.scrollingElement.scrollTop;
          if (scrolled > 20) {
            if (status !== "transparent") {
              setStatus("transparent");
            }
          } 
          else {
            if (status !== "top") {
              setStatus("top");
            }
        }
      })
    })



  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} auth={auth}/> : <SignedOutLinks />;
  return (
    <nav className="navbar" style={{
      backgroundColor:
        status === "top" ? "transparent" : "black"
    }}>
      <div className="navbar-container">
        <Link to='/'>
          </Link>
          {links}
      </div>
    </nav>
  )
}

export default Navbar