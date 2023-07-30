import styled from 'styled-components';

export const StyledForm = styled.form`
width: 100%;
display: flex;

  input {
    width: 30%;
    padding: 0 5px;
    /* outline-color: #3f6e93; */
    /* border: 1px solid black; */
    border: none;
    margin-right: 20px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 14px 0px;
  }

  button {
    height: 26px;
    width: 90px;
    cursor: pointer;
    background-color: #3f6e93;
    color: white;
    border: none;
    border-radius: 5px;
  }
`;
