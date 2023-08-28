import Instagram from './../assets/icons/instagram.png';
import Youtube from './../assets/icons/youtube-white.png';
import Linkedin from './../assets/icons/linkedin-white.png';

import classes from './footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className='container'>
                <div className={classes['footer__social']}>
                    <h5>All your math solutions, here!</h5>
                    <div className={classes['footer__social-links']}>
                        <a
                            href='https://www.instagram.com/prepboxmath/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={Instagram} alt='Instagram Logo' />
                        </a>
                        <a
                            href='https://www.youtube.com/channel/UC6PNazM_bdKl1Cu8OMP0PVA?app=desktop'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={Youtube} alt='Youtube Logo' />
                        </a>
                        <a
                            href='https://www.linkedin.com/company/prepanywhere'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={Linkedin} alt='Linkedin Logo' />
                        </a>
                    </div>
                </div>

                <div className={classes['footer__text']}>
                    <p>
                        &copy; <span>{new Date().getFullYear()}</span> - PrepAnywhere Inc. All Right
                        Reserved. 8 Heintzman Cres., Maple, ON, Canada
                    </p>
                    <div className={classes['footer__text-terms']}>
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
