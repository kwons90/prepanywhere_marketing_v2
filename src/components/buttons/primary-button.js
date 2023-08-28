import classes from './primary-button.module.css';

const PrimaryButton = ({ label, linkTo }) => {
    return (
        <a href={linkTo} className={classes.btn}>
            {label}
        </a>
    );
};

export default PrimaryButton;
