import styled from 'styled-components';

export const StyledForm = styled.form`
width: 100%;
display: flex;
margin-bottom: 20px;

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
    width: 26px;
    height: 26px;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    border: none;
    /* border: 1px solid black;
    border-radius: 50%; */
    color: black;
    font-size: 26px;
  }
`;
