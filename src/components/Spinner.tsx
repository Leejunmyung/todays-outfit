import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Spin />
    </SpinnerWrapper>
  );
};

const spinAround = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spin = styled.div`
  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
  width: 8vw;
  height: 8vw;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #dbdcef #0000;
  animation: ${spinAround} 1s infinite linear;

  &::before,
  ::after {
    content: '';
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
  }
  &::before {
    border-color: #723d46 #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }
`;

export default Spinner;
