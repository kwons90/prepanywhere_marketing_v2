import { useState, useEffect } from 'react';

import PrimaryButton from '../components/buttons/primary-button';
import classes from './header.module.css';
import { Link as RouteLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { ReactComponent as Logo } from './../assets/images/logo.png';

const Header = () => {

    return (
        <div className={classes.schools_header}>
        <div className={classes.header_nav}>
          <div className={classes.mobile_nav}>
            <a href="/about" className={classes.open_menu}>
              <span>About</span>
            </a>
          </div>
          <a className={classes.logo} href="/"></a>
          <nav className="headerNav">
            <a className={classes.home} href="/">
              <span>Home</span>
            </a>
            <a className={classes.about} href="/about">
              <span>About</span>
            </a>
            <a className={classes.about} href="/prepbox-ai">
              <span>PrepBox A.I.</span>
            </a>
            <a className={classes.bookshelf} href="https://app.prepanywhere.com/student/prep/textbooks">
              <span>Bookshelf (ending Sept. 30)</span>
            </a>
          </nav>
          <div className={classes.buttons}>
            {/* <a className={classes.log_in} href="https://app.prepanywhere.com/login">
              <span>Log In </span>
            </a> */}
            <a className={classes.signup} href="https://prepbox.io">
              <span>Try PrepBox</span>
            </a>
          </div>
        </div>
      </div>
    );
};

export default Header;