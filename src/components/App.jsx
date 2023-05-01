import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  // Стан застосунку
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // метод класу збору статистики
  const onLeaveFeedback = feedbackKey => {
    if (feedbackKey === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (feedbackKey === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (feedbackKey === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  //метод класу загальної кількості зібраних відгуків з усіх категорій
  const countTotalFeedback = () => good + neutral + bad;
  //метод классу відсоток позитивних відгуків
  const countPositiveFeedbackPercentage = () => {
    const TotalFeedback = countTotalFeedback();
    //або 0, щоб не було помилки в консолі
    return Math.round((good / TotalFeedback) * 100) || 0;
  };

  return (
    <Layout>

      <Section title="Please leave feedback">
        <FeedbackOptions
          feedbackKeys={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>

      <GlobalStyle />
      
    </Layout>
  );
};
