import styled from 'styled-components';
import { GameContainer, TimerContainer, TimerElement } from '../Game/styled';

export const FeedbackContainer = styled(GameContainer)``;

export const FeedbackItemContainer = styled(TimerContainer)`
  flex-direction: row;
  justify-content: start;
`;

export const FeedbackHeader = styled(TimerElement)`
  padding-top: 2rem;
  font-size: 2rem;
`;

export const FeedbackItemElement = styled(TimerElement)`
  padding-right: 0.75rem;
`;
