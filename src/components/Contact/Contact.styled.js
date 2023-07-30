import styled from 'styled-components';

export const StyledContact = styled.li`
  text-align: left;
  height: 28px;
  width: 566px;
  margin-bottom: 20px;

  p {
    padding: 1px 5px;
    display: inline-flex;
    align-items: baseline;
    font-size: 16px;
    width: 100%;
    margin-bottom: 0;
  }

  p::after {
    content: '';
    margin-left: 10px;
    display: inline-block;
    border-bottom: 2px dotted #bbbbbb;
    width: 100px;
    flex-grow: 2;
  }

  p > span {
    color: #fff500;
    margin-right: 20px;
  }

  a {
    display: inline-block;
    color: black;
    text-decoration: none;
    width: 520px;
    height: 100%;
    padding: 0 15px;
    margin-right: 18px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 14px 0px;
  }

  button {
    width: 28px;
    height: 28px;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    border: none;
    color: black;
    font-size: 100%;
    font-weight: bold;
    display: inline;
  }
`;
