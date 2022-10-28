import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class Form extends Component {
  render() {
    const { children } = this.props;

    return <S.FormWrapper>{children}</S.FormWrapper>;
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
