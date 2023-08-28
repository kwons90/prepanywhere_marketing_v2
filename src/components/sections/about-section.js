import classes from './about-section.module.css';
import Founder from './../../assets/images/founder.png';

const AboutSection = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <div className={classes['section-content']}>
                    <div className={classes['section__image']}>
                        <img className={classes.image} src={Founder} alt='Founder' />
                    </div>
                    <div className={classes['section__text']}>
                        <h2>Hi there!</h2>
                        <p>
                            My name is Min Lee. <br /> I created PrepAnywhere to help students to
                            improve their math.
                        </p>
                        <p>
                            After receiving much love and support, I launched a math tutoring app,
                            &nbsp;
                            <a href='https://prepbox.io'>PrepBox</a>.
                        </p>

                        <p>
                            If you want to study with me, you can attend my tutoring sessions on
                            &nbsp;
                            <a href='https://prepbox.io'>PrepBox</a>!
                        </p>
                        <p>
                            All you need is an iPad! <br />
                            <b>Book your free session with me today!</b>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
