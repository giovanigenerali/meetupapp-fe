import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0;
  width: 315px;

  @media all and (max-width: 375px) {
    min-width: 100%;
  }

  label {
    font-weight: bold;
    cursor: pointer;
  }

  span {
    font-weight: bold;
  }

  input[type='checkbox'] {
    margin: 0;
    padding: 0;
  }
`;

export default Form;
