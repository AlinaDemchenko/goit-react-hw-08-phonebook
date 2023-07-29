import styled from 'styled-components';

export const StyledTitle = styled.div`
  width: 300px;
  margin: 0 auto 20px;
  text-align: center;

  h1 {
    font-family: 'REM';
    display: inline-block;
    margin-top: 320px;
    text-shadow: 1px 1px 0.5px #00000082;
    font-size: 44px;
  }
  img {
    animation-name: bounceInDown;
    animation-duration: 1500ms;
    position: absolute;
    top: 0;
    transform: translateX(-45px);
    width: 55px;
    height: 400px;
  }

  span {
    color: #fff500;
    animation: lightSpeedInRight 500ms ease 900ms both;
    position: absolute;
    text-shadow:  1px 1px 0.5px #00000082;
  }

  @keyframes lightSpeedInRight {
    from {
      transform: translate3d(1000px, 0, 0) skewX(-30deg);
      opacity: 0;
    }

    60% {
      transform: skewX(20deg);
      opacity: 1;
    }

    80% {
      transform: skewX(-5deg);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      transform: translate3d(-45px, -3000px, 0) scaleY(3);
    }

    60% {
      opacity: 1;
      transform: translate3d(-45px, 25px, 0) scaleY(0.9);
    }

    75% {
      transform: translate3d(-45px, -10px, 0) scaleY(0.95);
    }

    90% {
      transform: translate3d(-45px, 5px, 0) scaleY(0.985);
    }

    to {
      transform: translate3d(-45px, 0, 0);
    }
  }
`;
