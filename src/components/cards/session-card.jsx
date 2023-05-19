import classes from './session-card.module.css';

const SessionCard = () => {
    return (
        <div>
            <div className={classes.card}>
                <div className={classes['card__description']}>
                    <div className={classes['card__description-content']}>
                        <h3>Our Session Times</h3>
                        <p>You can sign up to attend any of our 2-hr sessions to study with our tutors.</p>
                        <p>All times are U.S. Eastern Standard Time</p>
                    </div>
                </div>
                <div className={classes['card__week']}>
                    <ul className={classes['card__week-list']}>
                        <li>
                            Mon <span> - 1:00pm</span>
                        </li>
                        <li>
                            Tue <span> - 6:30am | 4:30pm | 5:00pm</span>
                        </li>
                        <li>
                            Wed <span> - 6:30am | 4:30pm | 5:00pm | 9:00pm</span>
                        </li>
                        <li>
                            Thu <span> - 6:30am | 8:00pm | 9:00pm</span>
                        </li>
                        <li>
                            Sat <span> - 6:30am | 10:00am | 10:30am</span>
                        </li>
                    </ul>
                </div>
            </div>
            <br/>
            <div className={classes.card}>
            <div className={classes['card__description']}>
                <div className={classes['card__description-content']}>
                    <h3>Summer Times</h3>
                    <p>Our times are different during summer break between July 5th and August 15th</p>
                    <p>All times are U.S. Eastern Standard Time</p>
                </div>
            </div>
            <div className={classes['card__week']}>
                <ul className={classes['card__week-list']}>
                    <li>
                        Tue <span> - 6:00pm | 8:00pm </span>
                    </li>
                    <li>
                        Wed <span> - 6:00pm | 8:00pm </span>
                    </li>
                    <li>
                        Thu <span> - 6:00pm | 8:00pm </span>
                    </li>
                    <li>
                        NOTE: we rest between June 30th  - July 4th
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default SessionCard;
