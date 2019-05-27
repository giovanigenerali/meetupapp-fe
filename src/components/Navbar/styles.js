import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  padding: 26px;
  background: #e5556e;

  @media all and (max-width: 375px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-right: 30px;

    @media all and (max-width: 375px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-between;
  height: 16px;

  @media all and (max-width: 375px) {
    width: 100%;
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    list-style: none;

    @media all and (max-width: 375px) {
      &:last-child {
        margin-left: 10px;
      }
    }
  }

  li {
    margin-right: 30px;

    @media all and (max-width: 375px) {
      margin-right: 20px;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.2s ease;

    @media all and (max-width: 375px) {
      font-size: 0.9em;
    }

    &:hover,
    &.active {
      color: #fff;

      .profileIcon {
        border-color: #fff;
      }
    }

    .profileIcon {
      border-radius: 50%;
      border: 1px solid transparent;
      padding: 4px;
      transition: border-color 0.2s ease;

      &:hover {
        border-color: #fff;
      }
    }
  }
`;
