import classes from './hero-section.module.css';
import Textbooks from './../../assets/images/Textbooks4.png';
import iPad from './../../assets/images/iPad_black5.png';


const TutorailSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.header}>
                <h4>Welcome to PrepAnywhere</h4>
            </div>
            <div className={classes.header2}>
                <h2>All your math solutions in one place</h2>
            </div>     
            <div className={classes.container}>
                <a href="https://app.prepanywhere.com/student/prep/textbooks" className={classes.product}>
                    <div className={classes.imgLeft}>    
                        <img className={classes.image} src={Textbooks} alt="textbooks" />
                        <p>Textbook solutions</p>
                    </div>
                </a>
                <a href="https://prepbox.io" className={classes.product}>
                    <div className={classes.imgRight}>
                        <img className={classes.image} src={iPad} alt="textbooks" />
                        <p>PrepBox math tutoring</p>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default TutorailSection;
