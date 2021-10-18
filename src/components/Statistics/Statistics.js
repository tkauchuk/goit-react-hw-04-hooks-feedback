import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <ul>
            <li className={styles.item}>
                <p className={styles.text}>Good:</p>
                <span>{good}</span>
            </li>
            <li className={styles.item}>
                <p className={styles.text}>Neutral:</p>
                <span>{neutral}</span>
            </li>
            <li className={styles.item}>
                <p className={styles.text}>Bad:</p>
                <span>{bad}</span>
            </li>
            <li className={styles.item}>
                <p className={styles.text}>Total:</p>
                <span>{total}</span>
            </li>
            <li className={styles.item}>
                <p className={styles.text}>Positive Feedback:</p>
                <span className={positivePercentage >= 50 ? styles.good : styles.bad}>
                    {isNaN(positivePercentage) ? 0 : positivePercentage}%
                </span>
            </li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}

export default Statistics;