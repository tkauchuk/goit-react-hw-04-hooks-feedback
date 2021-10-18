import { Component, Fragment } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import Section from './components/Section';


class App extends Component {

  static defaultProps;
  static propTypes;

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  onFeedbackButtonClick = response => {
    this.setState(previousState => {
      return {[response]: previousState[response] + 1}
    });
  }

  countTotalFeedback() {
    const responses = Object.values(this.state);
    return responses.reduce((accumulator, responses) => accumulator + responses, 0)
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    return Math.round(positive / total * 100);
  }

  render() {
    const options = Object.keys(this.state);
    const totalResponses = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Fragment>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onFeedbackButtonClick}
        />
        </Section>
        <Section title="Statistics">
          {
          totalResponses > 0
            ?
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalResponses}
              positivePercentage={positiveFeedbackPercentage}
            />
            :
              <Notification
                message="No feedback given"
              />
        }
        </Section>
      </Fragment>
    );
  }
}

export default App;
