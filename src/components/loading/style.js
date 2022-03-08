import styled, { keyframes } from 'styled-components';

const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const circleChange = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpan = styled.span`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  animation: ${circleChange} 1s infinite;
`;

export {
  LoadingStyle,
  LoadingSpan,
};
