import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import Logo from '../../logos/suofTQmg.png';

const Navbar = () => {
  const user = useSelector(selectUser);
  const [status, setStatus] = useState('top');
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 20) {
        if (status !== 'transparent') {
          setStatus('transparent');
        }
      } else {
        if (status !== 'top') {
          setStatus('top');
        }
      }
    });
  });

  const links = user ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: status === 'top' ? 'transparent' : 'black',
      }}
    >
      <div className="navbar-container">
        <Link to={user ? '/dashboard' : '/'}>
          <img
            className="navbar-container__logo"
            src={Logo}
            alt="cupola logo"
          />
        </Link>
        {links}
      </div>
    </nav>
  );
};

export default Navbar;
