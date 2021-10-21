import { useState, Fragment } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import Section from './components/Section';


function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackButtonClick = response => {
    switch (response) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;
      
      case 'bad':
        setBad(state => state + 1);
        break;
      
      default:
        return;
    }
  }
  
  const countTotalFeedback = () => {
    const responses = [good, neutral, bad];
    return responses.reduce((accumulator, responses) => accumulator + responses, 0)
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round(good / total * 100);
  }

  const options = Object.keys({good, neutral, bad});
  const totalResponses = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

    return (
      <Fragment>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onFeedbackButtonClick}
        />
        </Section>
        <Section title="Statistics">
          {
          totalResponses > 0
            ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
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

export default App;
