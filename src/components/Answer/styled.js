import styled from 'styled-components';
import { TimerContainer as TmContainer } from '../../pages/Game/styled';

export const TimerContainer = styled(TmContainer)``;

export const QuestionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5rem 0;

  p:first-child {
    font-size: 1.25rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
    color: var(--contrast);
  }

  p:last-child {
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
  }
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5rem 0;

  p {
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5rem 0;
`;

export const AnswerItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid var(--contrast);
  border-radius: 0.5rem;
  background-color: var(--lightContrast);
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
