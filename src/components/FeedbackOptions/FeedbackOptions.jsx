import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { FeedbackWrap, FeedbackBtn } from './FeedbackOptions.styled';
import { Icons } from './Icons';

export const FeedbackOptions = ({ feedbackKeys, onLeaveFeedback }) => {
  return (
    <FeedbackWrap>
      {feedbackKeys.map(feedbackKey => {
        return (
          <FeedbackBtn
            key={feedbackKey}
            name={feedbackKey}
            //анонимна фун-я
            onClick={() => onLeaveFeedback(feedbackKey)}
          >
            {Icons[feedbackKey]}
            {feedbackKey}
          </FeedbackBtn>
        );
      })}
    </FeedbackWrap>
  );
};

FeedbackOptions.propTypes = {
  stateKeys: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
