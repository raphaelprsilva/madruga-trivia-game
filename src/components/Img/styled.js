/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';

export const ImageWrapper = styled.img`
  padding-right: 30px;
  width: 434px;
  height: 84px;

  ${media.lessThan('medium')`
    padding-right: 0;
    padding-bottom: 10px;
    border-right: none;
    width: 200px;
    height: 63px;
  `}
`;
