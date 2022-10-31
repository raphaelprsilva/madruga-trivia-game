import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class Select extends Component {
  render() {
    const { id, name, label, options, handleChange } = this.props;
    return (
      <S.SelectWrapper>
        <label htmlFor={ id }>{label}</label>
        <S.SelectOptions
          name={ name }
          id={ id }
          onChange={ handleChange }
        >
          {options.map((category, index) => (
            <option key={ index } value={ category.value }>
              {category.name}
            </option>
          ))}
        </S.SelectOptions>
      </S.SelectWrapper>
    );
  }
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
    }),
  ).isRequired,
};

export default Select;
