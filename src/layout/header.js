import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Logo from './../assets/images/logo.png';
import PrimaryButton from '../components/buttons/primary-button';
import classes from './header.module.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isSmallHeader, setIsSmallHeader] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prevState) => !prevState);
    };

    const hideMenu = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSmallHeader(window.pageYOffset > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={`${classes.header} ${
                    isSmallHeader ? `${classes['header-shadow']}` : '80px'
                }`}
                style={{ height: `${isSmallHeader ? '60px' : '80px'}` }}
            >
                <div className='container'>
                    <nav className={classes['header__nav']}>
                        <Link to='/' className={classes['header__nav-logo']} onClick={hideMenu}>
                            <img src={Logo} alt='PrepAnywhere Logo' />
                        </Link>

                        <div
                            className={`${classes['header__nav-wrapper']} ${
                                showMenu ? `${classes.show}` : ''
                            }`}
                            style={{ top: `${isSmallHeader ? '60px' : '80px'}` }}
                        >
                            <ul className={`${classes['header__nav-list']} `}>
                                <li onClick={hideMenu}>
                                    <Link to='/' className={classes['header__nav-link']}>
                                        Home
                                    </Link>
                                </li>
                                <li onClick={hideMenu}>
                                    <Link to='/about' className={classes['header__nav-link']}>
                                        About
                                    </Link>
                                </li>
                                <li onClick={hideMenu}>
                                    <a
                                        href='/prepbox-ai'
                                        className={classes['header__nav-link']}
                                    >
                                        PrepBox A.I.
                                    </a>
                                </li>
                                <li onClick={hideMenu}>
                                    <a
                                        href='https://app.prepanywhere.com/student/prep/textbooks'
                                        className={classes['header__nav-link']}
                                    >
                                        Bookshelf (ending Sept. 30th)
                                    </a>
                                </li>
                            </ul>

                            <div className={classes['header__nav-button']}>
                                <PrimaryButton
                                    label='Download PrepBox'
                                    linkTo='https://www.prepanywhere.com/prepbox-ai'
                                />
                            </div>
                        </div>
                        <button
                            type='button'
                            className={`${classes['header__toggler']} ${
                                showMenu ? `${classes.open}` : ''
                            }`}
                            onClick={toggleMenu}
                        >
                            <span className={classes['header__toggler-top']}></span>
                            <span className={classes['header__toggler-middle']}></span>
                            <span className={classes['header__toggler-bottom']}></span>
                        </button>
                    </nav>
                </div>
            </header>
            <div
                className={`${classes['header__backdrop']} ${showMenu ? `${classes.show}` : ''}`}
                onClick={hideMenu}
            ></div>
        </>
    );
};

export default Header;
