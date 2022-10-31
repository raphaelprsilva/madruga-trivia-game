import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  height: 100vh;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0;
`;

export const TimerElement = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

export const TimerCount = styled(TimerElement)`
  font-size: 2rem;
  color: var(--red);
`;
