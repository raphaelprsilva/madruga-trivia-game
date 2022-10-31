import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  min-width: 100%;
  background-color: var(--mediumBackground);
  border-bottom: 1px solid var(--borders);

  /* img {
    margin-left: 2rem;
    width: 59px;
    height: 59px;

    ${media.lessThan('small')`
      width: 50px;
      height: 50px;
    `}
  } */
`;

export const LogoImg = styled.img`
    margin-left: 2rem;
    width: 61px;
    height: 39px;
`;

export const ProfileImg = styled(LogoImg)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const UserDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-right: 2rem;
  color: var(--white);

  ${media.lessThan('medium')`
    flex-direction: column;
    width: 210px;
  `}
`;

export const UserDataWrapperItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;
  height: 100%;
  justify-content: space-around;
  width: 285px;
  margin-right: 2rem;

  ${media.lessThan('medium')`
    min-height: 40px;
    flex-direction: row;
    justify-content: center;
    margin-right: 0;
    width: 200px;
  `}

  span:first-child {
    color: var(--lightContrast);
    font-weight: bolder;

    ${media.lessThan('medium')`
      min-width: 55px;
    `}
  }

  span:last-child {
    padding-left: 0.25rem;

    ${media.lessThan('medium')`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  }
`;
