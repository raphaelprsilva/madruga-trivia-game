import styled from 'styled-components';
import media from 'styled-media-query';

import { InputWrapper } from '../Input/styled';

export const SelectWrapper = styled(InputWrapper)``;

export const SelectOptions = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid var(--borders);
  border-radius: 5px;
  margin-bottom: 0.75rem;
  box-sizing: border-box;
  outline: none;
  transition: 0.3s;
  -webkit-transition: 0.3s;

  width: 300px;
  height: 45px;
  left: 454px;
  top: 525px;

  ${media.lessThan('small')`
      width: 250px;
    `}

  :focus {
    border: 1.3px solid var(--borderFocus);
  }
`;
