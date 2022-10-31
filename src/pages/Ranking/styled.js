import styled from 'styled-components';
import { GameContainer } from '../Game/styled';

export const RankingContainer = styled(GameContainer)``;

export const RankingTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: 2rem 0;
`;

export const RankingItemsContainer = styled(GameContainer)``;

export const RankingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

export const RankingItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 1rem;
  font-weight: bold;
  min-width: 100px;

  p:first-child {
    padding-right: 0.5rem;
    font-size: 1.2rem;
    /* font-weight: normal; */
    color: var(--highlight);
  }

  p:last-child {
    font-size: 1.2rem;
  }
`;
