import classes from './about-section.module.css';
import Founders from './../../assets/images/Minpic.png';


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
                <a href="https://app.prepanywhere.com/student/prep/textbooks">
                    <div>    
                        <img className={classes.image} src={Founders} alt="textbooks" />
                    </div>
                </a>
                <a href="https://prepbox.io">
                    <div className={classes.description}>
                        <p>I created PrepAnywhere to help students to improve their math</p>
                        <br/>
                        <p>After receiving much love and support, I have decided to make PrepAnywhere free</p>
                        <br/>
                        <p>And if you want to study with me, you can attend my tutoring sessions on PrepBox</p>
                        <br/>
                        <p>All you need is an iPad - book your free trial session with me today!</p>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default AboutSection;
