import { useState, useEffect } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { ReactComponent as Logo } from './../assets/images/PrepAnywhere_logo.png';
import classes from './header.module.css';

const Header = () => {
        function navOpen() {
          // implement navigation menu opening logic
        }
      
        function navClose() {
          // implement navigation menu closing logic
        }
    // const [showMenu, setShowMenu] = useState(false);
    // const [isSmallHeader, setIsSmallHeader] = useState(false);

    // const togglerMenuHandler = () => {
    //     setShowMenu((prevState) => !prevState);
    // };

    // const hideMenu = () => {
    //     setShowMenu(false);
    // };

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         window.addEventListener('scroll', () => setIsSmallHeader(window.pageYOffset > 80));
    //     }
    // }, []);

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
            <a className={classes.bookshelf} href="https://app.prepanywhere.com/student/prep/textbooks">
              <span>Bookshelf</span>
            </a>
          </nav>
          <div className={classes.buttons}>
            {/* <a className={classes.log_in} href="https://app.prepanywhere.com/login">
              <span>Log In </span>
            </a> */}
            <a className={classes.signup} href="https://studentprepbox.paperform.co">
              <span>Try PrepBox</span>
            </a>
          </div>
        </div>
      </div>
    );
};

export default Header;
