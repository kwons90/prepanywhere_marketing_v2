import { Link as RouteLink } from 'react-router-dom';

import PrepLogo from './../assets/images/full_logo.svg';
// import FooterLogo from './../assets/images/footer-logo.svg';
import Youtube from './../assets/icons/Youtube.svg';
import Instagram from './../assets/icons/Instagram.svg';
import Linkedin from './../assets/icons/LinkedIn.svg';
import TikTok from './../assets/icons/TikTok.svg';

import classes from './footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.assessment}>
                    <div className={classes['assessment__content']}>
                        <img className = {classes['logo']}src={PrepLogo} alt='icon' />
                        <div className={classes['assessment__text']}>
                            <h5>Let’s get in touch</h5>
                            <p>
                                Schedule a trial PrepBox class with Min or reach out to us at
                                <a href='mailto: info@prepanywhere.com'> info@prepanywhere.com</a>
                            </p>
                        </div>
                    </div>
                    <a
                        href='https://studentprepbox.paperform.co'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={classes['assessment__btn']}
                    >
                        Schedule assessment
                    </a>
                </div>
                <div className={classes.content}>
                    <div className={classes['content__texts']}>
                        <RouteLink to='/'>{/* <img src={FooterLogo} alt='Logo' /> */}</RouteLink>
                        <h6>All your math solutions, here</h6>
                        <p>
                            Look at premium solution videos to your textbook questions and book a free tutoring class
                        </p>

                        <ul className={classes['content__social']}>
                            <li>
                                <a
                                    href='https://www.youtube.com/channel/UC6PNazM_bdKl1Cu8OMP0PVA?app=desktop'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img width='80%' src={Youtube} alt='Youtube icon' />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.instagram.com/prepboxmath/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img width='70%' src={Instagram} alt='Instagram icon' />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.linkedin.com/company/prepanywhere'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img width='80%' src={Linkedin} alt='Linkedin icon' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.tiktok.com/@prepanywhere' target='_blank'>
                                    <img width='80%' src={TikTok} alt='TikTok icon' />
                                </a>
                            </li>
                            {/* <li>
                                <a href='#' target='_blank'>
                                    <img src={Slack} alt='Slack icon' />
                                </a>
                            </li> */}
                        </ul>
                    </div>
                    <div className={classes['content__links']}>
                        <ul className={classes['content__links-list']}>
                        </ul>
                        <ul className={classes['content__links-list']}>
                        </ul>
                    </div>
                </div>

                <div className={classes.copyright}>
                    <p>
                        &copy; {new Date().getFullYear()} - PrepAnywhere Inc. All Right Reserved. 8
                        Heintzman Cres., Maple, ON, Canada
                    </p>

                    <div className={classes['copyright-links']}>
                        <a
                            href='https://docs.google.com/document/d/15plLIrlTlMbqiwlLCWeSOIKKNVhM2r11xYJyXSmhGC8'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='https://docs.google.com/document/d/1Rfj4Wr1fdJtcz1z1IbBZXH-4RhBQSWvKehl8034dkpM'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
