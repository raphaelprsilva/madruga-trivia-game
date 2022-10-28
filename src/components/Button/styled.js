/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  margin-top: 1rem;
  gap: 10px;

  width: 300px;
  height: 40px;
  left: 454px;
  top: 601px;

  background-color: var(--contrast);
  border-radius: 5px;
  font-weight: bolder;
  color: var(--white);
  border: none;
  transition: background-color 0.5s ease;

  ${media.lessThan('small')`
      width: 250px;
  `}

  :hover {
    background-color: var(--highlight);
    cursor: pointer;
  }

  :disabled {
    background-color: var(--lightContrast);
  }
`;
