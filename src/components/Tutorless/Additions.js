import AdditionItem from '../elements/addition-item';
import classes from './Additions.module.css';

const Additions = () => {
    return (
        <section className={classes.additions}>
            <div className='container'>
                <div className={classes['additions__grid']}>
                    <AdditionItem text='Interactive coursework for G6 - G12' />
                    <AdditionItem text='Real-time A.I. marking' />
                    <AdditionItem text='A.I. generated progress reports' />
                </div>
            </div>
        </section>
    );
};

export default Additions;
