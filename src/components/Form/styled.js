import styled from 'styled-components';
import media from 'styled-media-query';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 314px;

  padding: 1rem;
  margin: 1.5rem;

  ${media.lessThan('small')`
    width: 300px;
  `}
`;
