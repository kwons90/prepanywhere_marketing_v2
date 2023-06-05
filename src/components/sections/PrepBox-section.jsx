import classes from './PrepBox-section.module.css';
import Textbooks from './../../assets/images/textbooks_dalle2.png';
import iPad from './../../assets/images/iPad_black7.png';


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
                <a href="https://prepbox.io">
                    <div>
                        <img className={classes.image} src={iPad} alt="iPad" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default PrepBoxSection;
