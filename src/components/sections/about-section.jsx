import classes from './about-section.module.css';
import Founders from './../../assets/images/Partners.png';


const AboutSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.header}>
                <h4>Hi there,</h4>
            </div>
            <div className={classes.header2}>
                <h2>My name is Min Lee</h2>
            </div>     
            <div className={classes.container}>
                <a href="https://app.prepanywhere.com/student/prep/textbooks" className={classes.product}>
                    <div className={classes.imgLeft}>    
                        <img className={classes.image} src={Founders} alt="textbooks" />
                        <p>Textbook solutions</p>
                    </div>
                </a>
                <a href="https://prepbox.io" className={classes.product}>
                    <div className={classes.imgRight}>
                        <p className={classes.product}>I created PrepAnhywhere for students to improve their math grades.</p>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default AboutSection;
