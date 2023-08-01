import styled from 'styled-components';

export const StyledContactsLayout = styled.div`
  width: 100vw;
  height: 100%;
  padding: 20px 0;

  div.cover {
    max-width: 80%;
    height: 80%;
    padding: 50px;
    background-color: #fff;
    border-radius: 30px;
    margin: 0 auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  div.wrapper {
    max-width: 603.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    display: inline-block;
    margin-bottom: 20px;
    margin-right: auto;
  }

  img.vibration {
    width: 40px;
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 78px;
    animation: tada 1250ms ease-in-out 1500ms;
  }

  img {
    position: relative;
    width: 50px;
    display: inline;
    margin: 0 0 20px 16px;
    animation: tada 1250ms ease-in-out 1700ms;
    z-index: 2;
  }
`;
