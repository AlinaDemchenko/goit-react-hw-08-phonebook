import styled from 'styled-components';

export const StyledContact = styled.li`
  text-align: left;
  height: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  p {
    padding: 2px 5px;
    display: inline-flex;
    align-items: baseline;
    font-size: calc(12px + 3 * (100vw - 320px) / 930);
    width: 100%;
    margin-bottom: 0;
    font-family: 'IBM Plex Mono';
    color: #535353;
  }

  /* p::after {
    content: '';
    margin-left: 10px;
    display: inline-block;
    border-bottom: 2px dotted #bbbbbb;
    width: 5px;
    flex-grow: 2;
  } */

  p > span {
    color: #fff500;
    margin-right: 20px;
  }

  a {
    display: inline-block;
    color: black;
    text-decoration: none;
    width: calc(60% + 20px);
    height: 100%;
    padding: 0 15px;
    margin-right: 18px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 14px 0px;
  }

  button {
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    border: none;
    color: black;
    font-size: 90%;
    font-weight: bold;
    display: inline;
    transition: transform 250ms ease;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 14px 0px;
    border-radius: 50%;
  }

  button:hover {
    transform: rotate(90deg);
  }
`;
