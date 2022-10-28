import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as S from './styled';

class Img extends Component {
  render() {
    const { src, alt } = this.props;
    return <S.ImageWrapper src={ src } alt={ alt } />;
  }
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Img;
