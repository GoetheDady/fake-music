import styled, { keyframes } from 'styled-components';

const change = keyframes`
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400%, 400%;
  animation: ${change} 10s ease-in-out infinite;
  align-items: center;
  padding-top: 50px;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;

const BackgroundTitle = styled.div`
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    src: url(https://fonts.gstatic.com/s/lato/v22/S6u8w4BMUTPHh30AUi-qNiXg7eU0.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    src: url(https://fonts.gstatic.com/s/lato/v22/S6u8w4BMUTPHh30AXC-qNiXg7Q.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  font-family: 'Lato', Arial, Helvetica, sans-serif;
  font-size: 50px;
  text-transform: uppercase;
  border: 2px solid #fff;
  padding: 30px 60px;
  margin-bottom: 50px;
`;

export {
  Background,
  BackgroundTitle,
};
