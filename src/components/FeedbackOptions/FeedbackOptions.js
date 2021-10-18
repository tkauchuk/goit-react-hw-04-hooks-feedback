import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'

function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <ul className={styles.list}>{
            options.map((option, index) => {
                return (
                    <li className={styles.item} key={index}>
                        <button
                            className={styles.button}
                            type="button"
                            onClick={() => onLeaveFeedback(option)}
                        >
                            {option}
                        </button>
                    </li>
                );
            })
        }</ul>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions;