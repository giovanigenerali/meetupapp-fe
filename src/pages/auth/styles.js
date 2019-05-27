import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 26px;

  img {
    margin-bottom: 20px;
  }

  a {
    color: #fff;
    opacity: 0.6;
    text-decoration: none;
    margin: 20px 0 0 0;
    align-self: center;
    transition: opacity 0.2s ease;

    &:hover,
    &:focus,
    &:active,
    &:visited {
      opacity: 1;
    }
  }
`;

export const Logo = styled.image`
  margin-bottom: 30px;
`;
