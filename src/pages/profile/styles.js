import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 40px 26px;

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

export const PreferencesIntro = styled.div`
  strong {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 28px;
  }

  margin-bottom: 30px;
`;
