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
            <a className={classes.open_menu}>
              <span onClick={navOpen}>Menu</span>
            </a>
            <div className={classes.nav_menu} id="mobile_menu">
              <a className={classes.mobile_home} href="https://www.prepanywhere.com/">
                <span>Home</span>
              </a>
              <a className={classes.mobile_about} href="https://app.prepanywhere.com/plans">
                <span>About</span>
              </a>
              <a className={classes.mobile_bookshelf} href="https://app.prepanywhere.com/student/prep/textbooks">
                <span>Bookshelf</span>
              </a>
              <a className={classes.mobile_login} href="https://app.prepanywhere.com/login">
                <span>Login</span>
              </a>
              <div className={classes.close_menu}>
                <span onClick={navClose}>X</span>
              </div>
            </div>
          </div>
          <a className={classes.logo} href="https://www.prepanywhere.com"></a>
          <nav className="headerNav">
            <a className={classes.home} href="https://www.prepanywhere.com/">
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
            <a className={classes.signup} href="https://prepbox.io">
              <span>Try PrepBox</span>
            </a>
          </div>
        </div>
      </div>
        // <>
        //     <header
        //         className={classes.header}
        //         style={{ height: `${isSmallHeader ? '60px' : '80px'}` }}
        //         id='header'
        //     >
        //         <nav className={classes.nav}>
        //             <RouteLink to='/' className={classes['nav-logo']}>
        //                 <Logo />
        //             </RouteLink>
        //             <div
        //                 className={`${classes.menu} ${showMenu ? `${classes['show-menu']}` : ''}`}
        //                 style={{ top: `${isSmallHeader ? '60px' : '80px'}` }}
        //             >
        //                 <ul className={classes['nav__list']}>
        //                     <li>
        //                         <Link
        //                             to='hero'
        //                             activeClass={classes.active}
        //                             spy={true}
        //                             smooth={true}
        //                             offset={-60}
        //                             duration={500}
        //                             onClick={hideMenu}
        //                         >
        //                             Home
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             to='students-section'
        //                             activeClass={classes.active}
        //                             spy={true}
        //                             smooth={true}
        //                             offset={-60}
        //                             duration={500}
        //                             onClick={hideMenu}
        //                         >
        //                             Solutions
        //                         </Link>
        //                     </li>
        //                     {/* <li>
        //                         <Link
        //                             to='faq-section'
        //                             activeClass={classes.active}
        //                             spy={true}
        //                             smooth={true}
        //                             offset={-60}
        //                             duration={500}
        //                             onClick={hideMenu}
        //                         >
        //                             Contact
        //                         </Link>
        //                     </li> */}
        //                 </ul>
        //             </div>

        //             <div className={classes['toggler-wrapper']}>
        //                 <button
        //                     className={`${classes.toggler} ${showMenu ? `${classes.open}` : ''}`}
        //                     onClick={togglerMenuHandler}
        //                 >
        //                     <span className={classes['toggler__top']}></span>
        //                     <span className={classes['toggler__middle']}></span>
        //                     <span className={classes['toggler__bottom']}></span>
        //                 </button>
        //             </div>
        //         </nav>
        //     </header>
        //     <div
        //         className={`${classes.backdrop} ${showMenu ? `${classes['show-backdrop']}` : ''}`}
        //         onClick={togglerMenuHandler}
        //     ></div>
        // </>
    );
};

export default Header;
