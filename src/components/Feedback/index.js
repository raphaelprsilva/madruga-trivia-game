import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Feedback extends Component {
  render() {
    const { message, imageSrc } = this.props;
    return (
      <div>
        <p data-testid="feedback-text">{message}</p>
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
