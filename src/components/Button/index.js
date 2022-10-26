import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, type, testId, isDisabled, onClick } = this.props;
    return (
      <button
        type={ type === 'submit' ? 'submit' : 'button' }
        data-testid={ testId }
        disabled={ isDisabled }
        onClick={ onClick }
      >
        {name}
      </button>
    );
  }
}

Button.defaultProps = {
  type: 'button',
  testId: 'btn-generic',
  isDisabled: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  testId: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
