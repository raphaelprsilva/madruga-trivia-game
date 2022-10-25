import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, placeholder, testId, value, onChange, label } = this.props;

    return (
      <div>
        <label htmlFor={ name }>{label}</label>
        <input
          placeholder={ placeholder }
          type={ type }
          name={ name }
          value={ value }
          data-testid={ testId }
          onChange={ onChange }
        />
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  testId: 'input-generic',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  testId: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
