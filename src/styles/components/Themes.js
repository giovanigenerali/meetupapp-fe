import styled from 'styled-components';

const Themes = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  label {
    font-size: 18px;
    color: rgba(256, 256, 256, 0.6);
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
    cursor: pointer;
    transition: color 0.2s ease;

    @media all and (max-width: 768px) {
      font-size: 1em;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    span {
      font-weight: normal;
    }
  }

  input[type='checkbox'] {
    background: #534c56 !important;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    appearance: none;
    outline: 0;
    margin-right: 10px;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    background: #e5556e !important;
  }

  input[type='checkbox']:checked + span {
    color: rgba(255, 255, 255, 1);
  }
`;

export default Themes;
