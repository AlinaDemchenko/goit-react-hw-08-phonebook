import styled from 'styled-components';
import filter from '../../images/filter2.png';
import hoverFilter from '../../images/filter-transparent.png';

export const StyledFilter = styled.div`
  display: inline-block;
  max-height: 28px;

  input {
    border: 0;
    width: 0;
    opacity: 0;
    transition: transform 2500ms ease;
  }

  input.visible {
    opacity: 1;
    width: 272.5px;
    height: 28px;
    padding: 2px 10px;
    border: none;
    border-radius: 5px;
    margin-right: 18px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 6px 14px 0px;
    font-family: 'IBM Plex Mono';
    font-size: calc(12px + 3 * (100vw - 320px) / 930);
    color: #535353;
  }

  input.visible:focus {
    outline: 1px solid #fff500;
  }

  button {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 0;
    background-color: transparent;
    background-image: url(${filter});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    outline: none;
    vertical-align: super;
  }

  button:hover {
    background-image: url(${hoverFilter});
  }

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;
