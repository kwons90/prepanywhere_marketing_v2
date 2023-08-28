import Testimonial from './../../assets/images/testimonial.png';

import classes from './testimonials-section.module.css';

const TestimonialSection = () => {
    return (
        <section className={classes.section}>
            <div className={classes.header}>
                <h4>As engaging as math can be</h4>
            </div>
            <div className={classes.header2}>
                <h2>Our Testimonials</h2>
            </div>
            <div className={classes.imgContainer}>
                <img className={classes.testimonialImg} src={Testimonial}  alt="testimonials"/>
            </div>
        </section>
    );
};

export default TestimonialSection;
