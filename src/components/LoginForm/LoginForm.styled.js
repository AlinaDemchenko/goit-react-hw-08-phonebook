import styled from 'styled-components';

export const StyledLoginForm = styled.div`
  display: inline-block;
  width: 100vw;

  form {
    width: 600px;
    height: 500px;
    margin: 100px auto;
    padding: 50px;
    /* display: flex;
    flex-direction: column; */
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 30px;
  }

  label {
    width: 340px;
    height: 25px;
    display: flex;
    gap: 20px;
    flex-grow: 2;
    margin-bottom: 20px;
  }

  span {
    margin-top: 2px;
  }

  input {
    width: 100%;
    padding: 0;
    border: none;
    border-bottom: 1px solid #bbbbbb;
    font-size: 15px;
    outline: none;
    color: #737373;
  }

  input:valid {
    color: black;
  }

  button {
    display: inline-block;
    width: 160px;
    margin: 48px 0 68px 180px;
    padding: 12px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.1em;
    background-color: #fff500;
    transition: box-shadow 250ms ease;
  }

  button:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  p {
    text-align: right;
  }

  a {
    color: black;
  }
`;
