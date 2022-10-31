import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as S from './styled';

class Feedback extends Component {
  render() {
    const { message, imageSrc } = this.props;
    return (
      <div>
        <S.FeedbackMessage data-testid="feedback-text">{message}</S.FeedbackMessage>
        <img src={ imageSrc } alt={ `${message}` } />
      </div>
    );
  }
}

Feedback.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Feedback;
