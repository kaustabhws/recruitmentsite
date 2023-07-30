import logo from '../../assets/logo.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './NavBar.css';

function Navbar(props) {
  const [searchBar, toggleSearchBar] = useState(false);
  const [mobileMenu, toggleMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [mobileMenu]);

  const closeMobileMenu = () => {
    toggleMobileMenu(false);
  };

  var navClassNames = classNames('nav', {
    search: searchBar,
    'no-search': !searchBar,
    'mobile-nav': mobileMenu,
  });

  var mobileMenuClassNames = classNames('menu-toggle', {
    'is-active': mobileMenu,
  });

  return (
    <>
      <div className="nav-wrapper">
        <nav className="navbar">
          <img src={logo} alt="logo" />
          <div
            className={mobileMenuClassNames}
            id="mobile-menu"
            onClick={(e) => toggleMobileMenu((prevMobileMenu) => !prevMobileMenu)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={navClassNames}>
            <li className="nav-item">
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" onClick={closeMobileMenu}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" onClick={closeMobileMenu}>
                Login/SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
