import classes from './PrepBox-section.module.css';
import Textbooks from './../../assets/images/textbooks_dalle2.png';
import iPad from './../../assets/images/iPad_black.png';


const PrepBoxSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.header}>
                <h4>Want to get ahead?,</h4>
            </div>
            <div className={classes.header2}>
                <h2>Get Tutored on PrepBox</h2>
            </div>     
            <div className={classes.container}>
                <a href="https://app.prepanywhere.com/student/prep/textbooks" className={classes.product}>
                    <div className={classes.imgLeft}>    
                        <p className={classes.des}>Have an iPad? <br/> First session is on us</p>
                        <div className={classes.buttons}>
                            <a className={classes.signup} href="https://studentprepbox.paperform.co">
                                <span>Try PrepBox</span>
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://prepbox.io" className={classes.product}>
                    <div className={classes.imgRight}>
                        <img className={classes.image} src={iPad} alt="iPad" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default PrepBoxSection;
