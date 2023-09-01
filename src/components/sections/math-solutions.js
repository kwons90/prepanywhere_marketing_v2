import MathSolution from './../../assets/images/math-solution.png';
import BookShelf from './../../assets/images/bookshelf.png';
import classes from './math-solutions.module.css';
import PrimaryButton from '../../components/buttons/primary-button';

const MathSolutions = () => {
    return (
        <section className={classes.solutions}>
            <div className='container'>
                <h2 className='text-center'>Study with us on PrepBox A.I.</h2>
                <h2 className='text-center'> <span className='text-blue'>Free math practice on the iPad</span></h2>
                <div className={classes.download_button}>
                    <PrimaryButton
                        label='Download PrepBox'
                        linkTo='https://apps.apple.com/en/app/prepbox/id1635011155'
                    />
                </div>
                <div className={classes['solutions-content']}>
                    <a href='https://prepbox.io' className={classes['solutions__item']}>
                        <div className={classes['solutions__item-image']}>
                            <img src={MathSolution} alt='Math Tutoring' />
                        </div>
                        <div className={classes['solutions__item-text']}>
                            <h4>
                                <span className={classes['solutions__item-link']}>PrepBox &nbsp;A.I.</span>
                                
                            </h4>
                            <p>Free daily math practice</p>
                        </div>
                    </a>

                    <a
                        href='https://app.prepanywhere.com/student/prep/textbooks'
                        className={classes['solutions__item']}
                    >
                        <div className={classes['solutions__item-image']}>
                            <img src={BookShelf} alt='Math Tutoring' />
                        </div>
                        <div className={classes['solutions__item-text']}>
                            <h4>Textbook Solutions</h4>
                            <p>Ending on Sept. 30th, 2023</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MathSolutions;
