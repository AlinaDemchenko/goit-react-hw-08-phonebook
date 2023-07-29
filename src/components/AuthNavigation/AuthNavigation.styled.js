import styled from 'styled-components';

export const StyledAuthNavigation = styled.p`
  font-size: 16px;
  display: inline-block;
  position: absolute;
  right: 40%;
  font-weight: bolder;
  animation: flipInY 1000ms ease 1300ms both;

  a {
    color: black;
    font-weight: normal;
    margin: 0 7px 0 7px;
    font-weight: 600;
    transition: color 0.25s ease;
  }

  a:hover{
    color: #fff500;
  }

  /* @keyframes flipInY {
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
} */
`;
