import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as S from './styled';

class Input extends Component {
  render() {
    const {
      type,
      name,
      placeholder,
      testId,
      value,
      onChange,
      label,
      error,
      errorMessage,
    } = this.props;

    return (
      <S.InputWrapper>
        <label htmlFor={ name }>{label}</label>
        <S.Input
          placeholder={ placeholder }
          type={ type }
          name={ name }
          value={ value }
          data-testid={ testId }
          onChange={ onChange }
        />
        {error && <S.Span>{errorMessage}</S.Span>}
      </S.InputWrapper>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  testId: 'input-generic',
};

Input.propTypes = {
  error: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Input;
