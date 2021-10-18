import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string),
        onLeaveFeedback: PropTypes.func
    }

    render() {
        return (
            <ul className={styles.list}>{
            this.props.options.map((option, index) => {
                return (
                    <li className={styles.item} key={index}>
                        <button
                            className={styles.button}
                            type="button"
                            onClick={() => this.props.onLeaveFeedback(option)}
                        >
                            {option}
                        </button>
                    </li>
                );
            })
        }</ul>
        );
    }
}

export default FeedbackOptions;