import demoVideo from './../../assets/videos/demo.mp4';

import classes from './howitworks-section.module.css';

const TutorsSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.header}>
                <h4>Our videos are FREE for the summer</h4>
            </div>
            <div className={classes.header2}>
                <h2>Here's How It Works</h2>
            </div>
            <div className={classes.demo_container}>
                    <video className={classes.demo_wrap} autoPlay loop muted playsInline>
                        <source src={demoVideo} type="video/mp4" />
                    </video>
                </div>
        </section>
    );
};

export default TutorsSection;
