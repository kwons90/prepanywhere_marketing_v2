import MathSolution from './../../assets/images/math-solution.png';
import BookShelf from './../../assets/images/bookshelf.png';
import classes from './math-solutions.module.css';

const MathSolutions = () => {
    return (
        <section className={classes.solutions}>
            <div className='container'>
                <h2 className='text-center'>All your math solutions in one place</h2>
                <div className={classes['solutions-content']}>
                    <a href='https://prepbox.io' className={classes['solutions__item']}>
                        <div className={classes['solutions__item-image']}>
                            <img src={MathSolution} alt='Math Tutoring' />
                        </div>
                        <div className={classes['solutions__item-text']}>
                            <h4>
                                <span className={classes['solutions__item-link']}>PrepBox</span>
                                &nbsp; math tutoring
                            </h4>
                            <p>Improve math by practicing daily with A.I.</p>
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
                            <h4>Bookshelf</h4>
                            <p>Textbook solutions</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MathSolutions;
